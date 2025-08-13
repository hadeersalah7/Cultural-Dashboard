import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { IIntialLoginState, ILogin, IPublicUser } from "./types";
import axios from "axios";
import { toast } from "react-toastify";
const initialState: IIntialLoginState = {
  id: null,
  email: "",
  password: "",
  loading: false,
  error: null,
  token: "",
};

// LOGIN THUNK API:
export const loginUser = createAsyncThunk<
  string,
  ILogin,
  { rejectValue: string }
>("user/login", async ({ email, password }: ILogin, thunkAPI) => {
  try {
    const response = await axios.post("/login", { email, password });
    const { token } = response.data;
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(
      {
        id: response.data.user.id,
        email: response.data.user.email
      }
    ))
    return token;
  } catch (error: any) {
    const errorMessage = error.response?.data?.message || "Login failed";
    // toast.error(errorMessage);
    return thunkAPI.rejectWithValue(errorMessage);
  }
});

// GET USER DATA:
export const getUserData = createAsyncThunk<
  IPublicUser,
  void,
  { rejectValue: string }
>("user/getData", async (_, thunkAPI) => {
  try {
    const token = localStorage.getItem("token");
    console.log("token---", token)
    const response = await axios.get("/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error:any) {
    thunkAPI.rejectWithValue("failed to fetch user");
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.email = "";
      state.password = "";
      state.token = "";
      state.loading = false;
      state.error = null;
      localStorage.removeItem("token");
    },
    retrieveToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Login Builder
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.email = "";
        state.password = "";
        state.token = payload;
        state.error = null;
        toast.success("Logged In Successfully");
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.loading = false;
        if (payload) toast.error(payload);
      });
    builder.addCase(getUserData.pending, (state) => {
      state.loading = true;
      state.error = null
    }).addCase(getUserData.fulfilled, (state, action) => {
      state.loading = false
      state.id = action.payload?.id
    }).addCase(getUserData.rejected, (state, {payload}) => {
      state.loading = false;
      if (payload) toast.error(payload)
    })
  },
});

export const { logoutUser, retrieveToken } = userSlice.actions;

export default userSlice.reducer;
