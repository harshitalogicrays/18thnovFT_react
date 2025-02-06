import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:"auth",
    initialState:{isLoggedIn:false,username:""},

    reducers:{
        //pure functions
        LOGIN :(state,action)=>{},
        LOGOUT(state,action){}
    }
})
console.log(authSlice.actions)

export default authSlice