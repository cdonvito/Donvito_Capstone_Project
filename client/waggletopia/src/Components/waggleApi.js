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
        body: { description, img_url, size, includes, category, price, stock },
      }),
    }),

    modifyProduct: builder.mutation({
      query: ({
        id,
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
      invalidatesTags: ["Products", "UserProducts"],
    }),

    fetchOrderHistory: builder.query({
      query: () => "/user/orders",
      providesTags: ["UserProducts"],
    }),

    fetchOrderSummary: builder.mutation({
      query: () => ({
        url: "/user/order/summary",
        method: "POST",
        body: { order_id },
        providesTags: ["UserProducts"],
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
  useFetchOrderSummaryMutation,
} = waggleApi;
