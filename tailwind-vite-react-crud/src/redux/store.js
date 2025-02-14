import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import filterSlice from "./filterSlice";
import productSlice from "./productSlice";
import checkoutSlice from "./checkoutSlice";

const mystore = configureStore({
    reducer:{
        cart:cartSlice.reducer,
        filter:filterSlice.reducer,
        product:productSlice.reducer,
        checkout:checkoutSlice.reducer
    }
})

export default mystore