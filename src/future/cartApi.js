import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define your RTK Query API
export const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }), // Adjust base URL to match your backend
  endpoints: (builder) => ({
    // Query to get the cart items for a specific user (by userEmail or userId)
    getCart: builder.query({
      query: (userEmail) => `cart?userEmail=${userEmail}`, // Replace with actual backend logic
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
        method: 'DELETE', // Assuming a DELETE request clears the entire cart
      }),
    }),
  }),
});

// Export the hook for getting the cart items
export const { 
  useGetCartQuery, 
  useAddToCartMutation, 
  useDeleteItemMutation, 
  useChangeQuantityMutation, 
  useClearCartMutation 
} = cartApi;
