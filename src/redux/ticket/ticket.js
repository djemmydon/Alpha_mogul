import { createSlice } from "@reduxjs/toolkit";
// import { message } from "antd";v
// import Cookies from "js-cookie";

const initialState = {
  itemList: [],
  totalQuantity: 0,
  allTotalPrice: 0,
  showCart: false,
};
const cartSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    addToCart: (state, action) => {



      const cartItems = action.payload

      const existItem = state.itemList.find((ext) => ext.id === cartItems.id)

      if(existItem) {
        state.itemList.map((item) =>
        item.id === existItem.id && cartItems
      )
      

      }else{
        state.itemList.push(action.payload);
      state.totalQuantity += action.payload.qty;
      state.allTotalPrice += action.payload.price * action.payload.qty;


      }

      // message.success("Item Added successfully", 3);

      // localStorage.setItem(
      //   "totalQuantity",
      //   JSON.stringify(state.totalQuantity)
      // );
      // localStorage.setItem(
      //   "allTotalPrice",
      //   JSON.stringify(state.allTotalPrice)
      // );
      // localStorage.setItem("itemList", JSON.stringify(state.itemList));
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

      // localStorage.setItem("itemList", JSON.stringify(state.itemList));
      // localStorage.setItem(
      //   "totalQuantity",
      //   JSON.stringify(state.totalQuantity)
      // );
      // localStorage.setItem(
      //   "allTotalPrice",
      //   JSON.stringify(state.allTotalPrice)
      // );

      // message.success("Item removed successfully", 3);
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;

