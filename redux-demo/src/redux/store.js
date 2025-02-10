import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import userSlice from "../userSlice";

const mystore = configureStore({
    reducer:{
        auth:authSlice.reducer,
        user:userSlice.reducer
    }
})
export default mystore