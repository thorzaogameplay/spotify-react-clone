import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    accessToken: "",
    expirationTime: "",
    expiresIn: "",
    isLoggedIn: false,
    tokenType: "",
    user: {
      name: "",
      image: "",
    },
  },
  reducers: {
    loginSuccess: (state, { payload }) => {
      console.log("payload", payload);
      state.accessToken = payload.accessToken;
      state.expiresIn = payload.expiresIn;
      state.isLoggedIn = true;
      state.tokenType = payload.tokenType;
    },
    setUser: (state, { payload }) => {
      state.user.name = payload.display_name;
      state.user.image = payload.images[0].url;
    },
  },
});

export const { loginSuccess, setUser } = authSlice.actions;

export default authSlice.reducer;
