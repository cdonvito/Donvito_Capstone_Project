import { configureStore } from "@reduxjs/toolkit";

// Import the API service we defined (which includes the API endpoints and the reducer)
import { waggleApi } from "./waggleApi";
import userReducer from "../Users/userSlice";

// Create a Redux store
const store = configureStore({
  reducer: {
    // The key is the reducerPath we defined in our API service, and the value is the reducer
    [waggleApi.reducerPath]: waggleApi.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(waggleApi.middleware),
});

export default store;