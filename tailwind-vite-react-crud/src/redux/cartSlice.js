import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{cartItems:[] , total:0},
    reducers:{
        ADD_TO_CART(state,action){},
        CALCULATE_TOTAL(state,action){},
        REMOVE_FROM_CART(state,action){},
        EMPTY_CART(state,action){},
        INCREASE(state,action){},
        DECREASE(state,action){}
    }
})
export const {} = cartSlice.actions
export default cartSlice
export const selectCartItems = state=>state.cart.cartItems
export const selectTotal = state=>state.cart.total