import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name:"product",
    initialState:{products:[]},
    reducers:{
        STOREPRODUCTS(state,action){
            state.products = action.payload
        }
    }
})
export const {STOREPRODUCTS} = productSlice.actions
export default productSlice
export const selectProducts = state=>state.product.products