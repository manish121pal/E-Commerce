import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import serviceData from './commerceService'
const initialState={
    isLoading :false,
    isSuccess:false,
    isError:false,
    
   allproduct:[] 
}
 const commerceSlice=createSlice({
   name:'product',
   initialState,

   reducers:{
  
   },


   extraReducers:(builder)=>{
    builder
    .addCase(getAllproduct.pending,(state)=>{
        state.isLoading=true
    })
    .addCase(getAllproduct.fulfilled,(state,action)=>{
        state.isLoading=false,
        state.isSuccess=true,
        state.allproduct=action.payload
    })
    .addCase(getAllproduct.rejected,(state)=>{
        state.isLoading=false,
        state.isSuccess=false,
        state.isError=true
    })
    .addCase(jeweleriProduct.pending,(state)=>{
        state.isLoading=true
    })
    .addCase(jeweleriProduct.fulfilled,(state,action)=>{
        state.isLoading=false,
        state.isSuccess=true,
        state.allproduct=action.payload
    })
    .addCase(jeweleriProduct.rejected,(state)=>{
        state.isLoading=false,
        state.isSuccess=false,
        state.isError=true
    })

   }
 })
 
 export default commerceSlice.reducer
 export const getAllproduct=createAsyncThunk('GET/PRODUCT',async()=>{
    try {
     return await serviceData.allProductData()
    
    } catch (error) {
        console.log(error.message)
    }

 })

 export const jeweleriProduct=createAsyncThunk('JEWELERI/PRODUCT',async()=>{
    try {
      return  await  serviceData.jeweleriData()
    } catch (error) {
       console.log(error.message) 
    }
 })
 