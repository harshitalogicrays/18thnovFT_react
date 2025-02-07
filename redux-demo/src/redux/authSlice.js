import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:"auth",
    initialState:{isLoggedIn:false,username:""},

    reducers:{
        //pure functions
        LOGIN :(state,action)=>{
            console.log("login called")
            console.log(action.payload)

            let {login,name} =action.payload
            state.isLoggedIn = login
            state.username = name
        },
        LOGOUT(state,action){}
    }
})
console.log(authSlice.actions)
export const {LOGIN,LOGOUT} = authSlice.actions
export default authSlice

export const selectUname = (state)=>state.auth.username