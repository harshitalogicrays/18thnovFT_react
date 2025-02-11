import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";

const mystore = configureStore({
    reducer:{
        cart:cartSlice.reducer,
        product:productSlice.reducer
    }
})

export default mystore