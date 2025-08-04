import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { IIntialLoginState, ILogin } from "./types";
import axios from "axios";
import { toast } from "react-toastify";
const initialState: IIntialLoginState = {
    email: "",
    password: "",
    loading: false,
    error: null,
    token: ""
};

export const loginUser = createAsyncThunk<string, ILogin, { rejectValue: string }>(
    "user/login",
    async ({ email, password }: ILogin, thunkAPI) => {
        try {
            const response = await axios.post("/login", { email, password });
            const { token } = response.data;
            localStorage.setItem("token", token);
            return token;
        } catch (error: any) {
            const errorMessage = error.response?.data?.message || "Login failed";
            // toast.error(errorMessage);
            return thunkAPI.rejectWithValue(errorMessage);
        }
    }
);

const loginUserSlice = createSlice({
    name: 'loginUser',
    initialState,
    reducers: {
        logoutUser: (state) => {
            state.email = "";
            state.password = "";
            state.token = "";
            state.loading = false;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, {payload}) => {
                state.loading = false;
                state.email = "";
                state.password = "";
                state.token = payload;
                state.error = null;
                toast.success("Logged In Successfully");
            })
            .addCase(loginUser.rejected, (state, {payload}) => {
                state.loading = false;
                if(payload) toast.error(payload);
            });
    },
})

export const { logoutUser } = loginUserSlice.actions;

export default loginUserSlice.reducer