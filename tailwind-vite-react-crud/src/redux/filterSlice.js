import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name:"filter",
    initialState:{filterfilters:[],searchval:'',catval:''},
    reducers:{
        FILTER_BY_SEARCH(state,action){
            // console.log(action.payload)
            let {filters,search} =action.payload
            if(search !=''){
               const ffilters =  filters.filter((item)=>item.title.toLowerCase().includes(search.toLowerCase()))
               state.filterfilters = ffilters
            }
            state.searchval = search
        } , 
        FILTET_BY_CATEGORY(state,action){
            let {filters,catval} =action.payload
            if(catval !=''){
               const ffilters =  filters.filter((item)=>item.category==catval)
               state.filterfilters = ffilters
            }
            state.catval = catval
        }
    }
})
export const {FILTER_BY_SEARCH,FILTET_BY_CATEGORY} = filterSlice.actions
export default filterSlice
export const selectFilterProducts = state=>state.filter.filterfilters
export const selectSearchVal = state=>state.filter.searchval
export const selectCatVal = state=>state.filter.catval
