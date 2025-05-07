import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const waggleApi = createApi({
  reducerPath: "waggleApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().user.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
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

  }),

});

export const {
  useProductsAvailableQuery,
  useLoginMutation,
  useFetchUserQuery,
} = waggleApi