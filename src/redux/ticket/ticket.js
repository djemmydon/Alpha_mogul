import { createSlice } from "@reduxjs/toolkit";
// import { message } from "antd";
// import Cookies from "js-cookie";

const initialState = {
  itemList: localStorage.getItem("itemList")
    ? JSON.parse(localStorage.getItem("itemList"))
    : [],
  totalQuantity: localStorage.getItem("totalQuantity")
    ? JSON.parse(localStorage.getItem("totalQuantity"))
    : 0,
  allTotalPrice: localStorage.getItem("allTotalPrice")
    ? JSON.parse(localStorage.getItem("allTotalPrice"))
    : 0,
  showCart: false,
};
const cartSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.totalQuantity += action.payload.qty;
      state.itemList.push(action.payload);
      state.allTotalPrice += action.payload.price * action.payload.qty;

      // message.success("Item Added successfully", 3);

      localStorage.setItem(
        "totalQuantity",
        JSON.stringify(state.totalQuantity)
      );
      localStorage.setItem(
        "allTotalPrice",
        JSON.stringify(state.allTotalPrice)
      );
      localStorage.setItem("itemList", JSON.stringify(state.itemList));
    },

    removeFromCart(state, action) {
      const product = state.itemList.find(
        (item) => item.id === action.payload.id
      );
      const cartItem = state.itemList.filter(
        (cartItem) => cartItem.id !== product.id
      );

      state.itemList = cartItem;
      state.allTotalPrice -= product.price * product.qty;
      state.totalQuantity -= product.qty;

      // console.log(product.price, product.qty);

      localStorage.setItem("itemList", JSON.stringify(state.itemList));
      localStorage.setItem(
        "totalQuantity",
        JSON.stringify(state.totalQuantity)
      );
      localStorage.setItem(
        "allTotalPrice",
        JSON.stringify(state.allTotalPrice)
      );

      // message.success("Item removed successfully", 3);
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;

