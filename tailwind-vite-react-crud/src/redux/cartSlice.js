import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice({
    name:"cart",
    initialState:{cartItems:[] , total:0},
    reducers:{
        ADD_TO_CART(state,action){
            let itemIndex= state.cartItems.findIndex(item=>item.id==action.payload.id)
            if(itemIndex == -1){
                state.cartItems.push({...action.payload,qty:1})
            }
            else toast.info(`already added to cart`)
        },
        CALCULATE_TOTAL(state,action){
            let t = state.cartItems.reduce((prev,curr)=>{return prev+(curr.price*curr.qty)},0)
            state.total = t
        },
        REMOVE_FROM_CART(state,action){
            let filters = state.cartItems.filter(item=>item.id!=action.payload)
            state.cartItems = filters

            // let itemIndex= state.cartItems.findIndex(item=>item.id==action.payload)
            // state.cartItems.splice(itemIndex,1)
        },
        EMPTY_CART(state,action){
            state.cartItems=[];state.total=0
        },
        INCREASE(state,action){
            let itemIndex= state.cartItems.findIndex(item=>item.id==action.payload.id)
            if(itemIndex != -1){
                if(state.cartItems[itemIndex].qty < action.payload.stock)
                    state.cartItems[itemIndex].qty++
                else toast.info(`only ${ action.payload.stock} qty available`)
            }
        },
        DECREASE(state,action){
            let itemIndex= state.cartItems.findIndex(item=>item.id==action.payload.id)
            if(itemIndex != -1){
                if(state.cartItems[itemIndex].qty >1)
                    state.cartItems[itemIndex].qty--
                else  state.cartItems[itemIndex].qty =1
            }
        }
    }
})
export const {ADD_TO_CART,CALCULATE_TOTAL,REMOVE_FROM_CART,EMPTY_CART,INCREASE,DECREASE} = cartSlice.actions
export default cartSlice
export const selectCartItems = state=>state.cart.cartItems
export const selectTotal = state=>state.cart.total