import { configureStore } from "@reduxjs/toolkit";
import commerceReducer from './commerce/commerceSlice'
import cartReducer from './cart/cartSlice'
const store=configureStore({
    reducer:{
   product:commerceReducer,
   cart:cartReducer
    }
})
export default store