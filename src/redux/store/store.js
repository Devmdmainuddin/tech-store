import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import cartReducer from '../state/cartSlice';
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },

});

setupListeners(store.dispatch); // 
