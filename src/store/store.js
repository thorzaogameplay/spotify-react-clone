import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./reducers/counterSlice";
import authSlice from "./reducers/authSlice";
import contentSlice from "./reducers/contentSlice";

export default configureStore({
  reducer: { counter: counterSlice, auth: authSlice, content: contentSlice },
});
