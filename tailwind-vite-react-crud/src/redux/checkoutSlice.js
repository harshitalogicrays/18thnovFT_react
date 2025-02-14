import { createSlice } from "@reduxjs/toolkit";

const checkoutSlice = createSlice({
    name:"checkout",
    initialState:{checkouts:[]},
    reducers:{
        STORECHECKOUTS(state,action){
            state.checkouts = action.payload
        }
    }
})
export const {STORECHECKOUTS} = checkoutSlice.actions
export default checkoutSlice
export const selectcheckouts = state=>state.checkout.checkouts