import { configureStore } from "@reduxjs/toolkit";
// import { productApi } from "../../featured/productApi";
import { setupListeners } from "@reduxjs/toolkit/query";
// import { cartApi } from "../../featured/cartApi";

export const store = configureStore({
  reducer: {
    // [productApi.reducerPath]: productApi.reducer, 
    // [cartApi.reducerPath]: cartApi.reducer,
  },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(productApi.middleware,cartApi.middleware ),
});

setupListeners(store.dispatch); // 
