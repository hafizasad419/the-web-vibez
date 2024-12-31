import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice"

export default configureStore({
    reducer: {
        user: userReducer,
    },
    devTools: process.env.NODE_ENV === "production" ? false : true,
});
