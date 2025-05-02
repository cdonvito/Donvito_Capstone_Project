import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  token: "",
  user: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;

      // Save to localStorage
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("user", JSON.stringify(action.payload.user));
    },
    logout: (state) => {
      state.token = "";
      state.user = {};
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export const getUserId = (state) => state.user.user.user_id;
export const getToken = (state) => state.user.token;
export default userSlice.reducer;