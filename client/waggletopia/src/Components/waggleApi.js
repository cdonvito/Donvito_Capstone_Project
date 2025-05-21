import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const waggleApi = createApi({
  reducerPath: "waggleApi",

  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:3000/api",
    baseUrl: "https://waggle-topia.onrender.com/api",
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
    register: builder.mutation({
      query: (loginCred) => ({
        url: "/auth/register",
        method: "POST",
        body: loginCred,
        providesTags: ["Users"],
      }),
    }),

    login: builder.mutation({
      query: (loginCred) => ({
        url: "/auth/login",
        method: "POST",
        body: loginCred,
        providesTags: ["Users"],
      }),
    }),

    deleteUser: builder.mutation({
      query: () => ({
        url: "/user",
        method: "DELETE",
      }),
      invalidatesTags: ["Users"],
    }),

    fetchUsers: builder.query({
      query: () => "/users",
      providesTags: ["Users"],
    }),

    fetchUser: builder.query({
      query: () => "/users/me",
    }),

    createProduct: builder.mutation({
      query: ({
        name,
        description,
        img_url,
        size,
        includes,
        category,
        price,
        stock,
      }) => ({
        url: "/product",
        method: "POST",
        body: {
          name,
          description,
          img_url,
          size,
          includes,
          category,
          price,
          stock,
        },
      }),
    }),

    modifyProduct: builder.mutation({
      query: ({
        id,
        name,
        description,
        img_url,
        size,
        includes,
        category,
        price,
        stock,
      }) => ({
        url: `/product/${id}`,
        method: "PATCH",
        body: {
          id,
          name,
          description,
          img_url,
          size,
          includes,
          category,
          price,
          stock,
        },
      }),
      invalidatesTags: ["Products"],
    }),

    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/product/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Products"],
    }),

    fetchProducts: builder.query({
      query: () => "/products/all",
      providesTags: ["Products"],
    }),

    fetchProductsAvailable: builder.query({
      query: () => "/products/available",
      providesTags: ["Products"],
    }),

    fetchSingleProduct: builder.query({
      query: (id) => `/product/${id}`,
      providesTags: ["Products"],
    }),

    createUserProduct: builder.mutation({
      query: ({ product_id, quantity }) => ({
        url: "/user/userProduct",
        method: "POST",
        body: { product_id, quantity },
      }),
      invalidatesTags: ["Products", "UserProducts"],
    }),

    fetchUserProducts: builder.query({
      query: () => "/user/userProducts",
      providesTags: ["UserProducts"],
    }),

    deleteUserProduct: builder.mutation({
      query: (id) => ({
        url: `/user/userProduct/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Products", "UserProducts"],
    }),

    subtractUserQty: builder.mutation({
      query: ({ id, quantity }) => ({
        url: `/user/userProduct/subtract/${id}`,
        method: "PATCH",
        body: { quantity },
      }),
      invalidatesTags: ["Products", "UserProducts"],
    }),

    addUserQty: builder.mutation({
      query: ({ id, quantity }) => ({
        url: `/user/userProduct/add/${id}`,
        method: "PATCH",
        body: { quantity },
      }),
      invalidatesTags: ["Products", "UserProducts"],
    }),

    userCheckout: builder.mutation({
      query: () => ({
        url: "/user/checkout",
        method: "POST",
      }),
      invalidatesTags: ["Products", "UserProducts", "Orders"],
    }),

    fetchOrderHistory: builder.query({
      query: () => "/user/orders",
      providesTags: ["Orders"],
    }),

    fetchOrderSummary: builder.query({
      query: (order_id) => ({
        url: `/user/orders/${order_id}/summary`,
        providesTags: ["Orders"],
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useDeleteUserMutation,
  useFetchUsersQuery,
  useFetchUserQuery,
  useCreateProductMutation,
  useModifyProductMutation,
  useDeleteProductMutation,
  useFetchProductsQuery,
  useFetchProductsAvailableQuery,
  useFetchSingleProductQuery,
  useCreateUserProductMutation,
  useFetchUserProductsQuery,
  useDeleteUserProductMutation,
  useSubtractUserQtyMutation,
  useAddUserQtyMutation,
  useUserCheckoutMutation,
  useFetchOrderHistoryQuery,
  useFetchOrderSummaryQuery,
} = waggleApi;
