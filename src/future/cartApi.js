import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define your RTK Query API
export const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_API_URL}` }), 
  endpoints: (builder) => ({
    getCart: builder.query({
      query: (userEmail) => `cart?userEmail=${userEmail}`, 
    }),
    addToCart: builder.mutation({
      query: (newProduct) => ({
        url: 'cart',
        method: 'POST',
        body: newProduct,
      }),
    }),
    deleteItem: builder.mutation({
      query: (productId) => ({
        url: `cart/${productId}`,
        method: 'DELETE',
      }),
    }),
    changeQuantity: builder.mutation({
      query: ({ productId, qun }) => ({
        url: `cart/${productId}`,
        method: 'PATCH',
        body: { qun },
      }),
    }),
    clearCart: builder.mutation({
      query: () => ({
        url: 'cart',
        method: 'DELETE', // Assuming a DELETE request clears the cart
      }),
    }),
  }),
});

// Export hooks for each endpoint
export const { 
  useGetCartQuery, 
  useAddToCartMutation, 
  useDeleteItemMutation, 
  useChangeQuantityMutation, 
  useClearCartMutation 
} = cartApi;
