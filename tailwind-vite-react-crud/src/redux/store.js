import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import filterSlice from "./filterSlice";
import productSlice from "./productSlice";

const mystore = configureStore({
    reducer:{
        cart:cartSlice.reducer,
        filter:filterSlice.reducer,
        product:productSlice.reducer
    }
})

export default mystore