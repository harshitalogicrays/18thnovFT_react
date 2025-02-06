import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";

const mystore = configureStore({
    reducer:{
        auth:authSlice.reducer,
    }
})
export default mystore