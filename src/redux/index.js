import { configureStore } from "@reduxjs/toolkit";
// import authSlice from "./authSlice";
import cartSlice from "./ticket/ticket";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});
export default store;
