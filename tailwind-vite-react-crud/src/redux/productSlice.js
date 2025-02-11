import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name:"product",
    initialState:{filterProducts:[],searchval:''},
    reducers:{
        FILTER_BY_SEARCH(state,action){
            console.log(action.payload)
        }
    }
})
export const {FILTER_BY_SEARCH} = productSlice.actions
export default productSlice
export const selectFilterProducts = state=>state.product.filterProducts
export const selectSearchVal = state=>state.product.searchval
