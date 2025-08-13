import userSlice from "./redux-features/user/userSlice.ts";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    loginUser: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
