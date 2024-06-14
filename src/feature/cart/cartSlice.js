import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        cart:[],

        isLoading:false,
        isSuccess:false,
        isError:false

    },

    reducers:{
    add:(state,action)=>{
    return{
        ...state,
        cart:[...state.cart,action.payload]
    }
        
    },
    remove:(state,action)=>{
        return{
            ...state,
            cart:state.cart.filter((item)=>item.id !==action.payload)
        }
    }
    
    

    },
    extraReducers:(builder)=>{

    }


})
export const {add,remove}=cartSlice.actions
export default cartSlice.reducer
