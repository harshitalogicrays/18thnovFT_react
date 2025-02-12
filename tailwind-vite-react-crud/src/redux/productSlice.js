import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name:"product",
    initialState:{filterProducts:[],searchval:'',catval:''},
    reducers:{
        FILTER_BY_SEARCH(state,action){
            // console.log(action.payload)
            let {products,search} =action.payload
            if(search !=''){
               const fproducts =  products.filter((item)=>item.title.toLowerCase().includes(search.toLowerCase()))
               state.filterProducts = fproducts
            }
            state.searchval = search
        } , 
        FILTET_BY_CATEGORY(state,action){
            let {products,catval} =action.payload
            if(catval !=''){
               const fproducts =  products.filter((item)=>item.category==catval)
               state.filterProducts = fproducts
            }
            state.catval = catval
        }
    }
})
export const {FILTER_BY_SEARCH,FILTET_BY_CATEGORY} = productSlice.actions
export default productSlice
export const selectFilterProducts = state=>state.product.filterProducts
export const selectSearchVal = state=>state.product.searchval
export const selectCatVal = state=>state.product.catval
