import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const waggleApi = createApi({
  reducerPath: "bookBuddyApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().user.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    // fetch All Books
    books: builder.query({
      query: () => "/books",
      providesTags: ["Books"],
    }),
  }),
});