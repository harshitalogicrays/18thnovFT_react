import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name:"order",
    initialState:{orders:[]},
    reducers:{
        STOREORDERS(state,action){
            state.orders = action.payload
        }
    }
})
export const {STOREORDERS} = orderSlice.actions
export default orderSlice
export const selectOrders = state=>state.order.orders