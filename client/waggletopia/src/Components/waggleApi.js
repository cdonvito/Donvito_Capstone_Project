import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const waggleApi = createApi({
  reducerPath: "waggleApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().user.token;
      if (token) {
        headers.set("Authorization", token);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    // fetch All Products Available
    productsAvailable: builder.query({
      query: () => "/products/available",
      providesTags: ["Products"],
    }),

    login: builder.mutation({
      query: (loginCred) => ({
        url: "/auth/login",
        method: "POST",
        body: loginCred,
      }),
    }),

    fetchUser: builder.query({
      query: () => "/users/me",
    }),

    addToCart: builder.mutation({
      query: ({product_id, quantity}) => ({
        url: "/user/userProduct",
        method: "POST",
        body: { product_id, quantity },
      }),
      invalidatesTags: ["Products", "UserProducts"],
    }),

    fetchUserProducts: builder.query({
      query: () => "/user/userProducts",
      providesTags: ["UserProducts"]
    }),
    

  }),

});

export const {
  useProductsAvailableQuery,
  useLoginMutation,
  useFetchUserQuery,
  useAddToCartMutation,
  useFetchUserProductsQuery,
} = waggleApi