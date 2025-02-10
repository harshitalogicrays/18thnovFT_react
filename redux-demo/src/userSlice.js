import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers =  createAsyncThunk('user/fetchUsers',async(url,thunkAPI)=>{
    try{
        const res = await fetch(url)
        const data = await res.json()
        return data
    }
    catch(err){ thunkAPI.rejectWithValue(err)}
})


const userSlice = createSlice({
    name:"user",
    initialState:{users:[],loading:false,error:''},
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchUsers.pending,(state,action)=>{state.loading=true})
               .addCase(fetchUsers.fulfilled,(state,action)=>{
                // console.log(action.payload)
                state.users = action.payload
                state.loading = false
               })
               .addCase(fetchUsers.rejected,(state,action)=>{
                state.error=action.payload
               })
    }
})

export default userSlice
export const selectUsers = state=>state.user.users