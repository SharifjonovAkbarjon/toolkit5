import { createSlice } from "@reduxjs/toolkit";
import { getStorage, saveStorege } from "../components/helpers";
const cart = createSlice({
  name: "cart",
  initialState: {
    value: getStorage("count") || [
      {
        id: 1,
        username: "Akbarjon",
        lname: "Sharifjonov",
        phone: +998972543354,
      },

    ],
  },
reducers: {
  remove: (state, action) => {
    state.value = state.value.filter((item) => item.id !== action.payload.id);
    saveStorege("count", state.value);
  },
  update: (state, action) => {
    const existingIndex = state.value.findIndex(
      (user) => user.id === action.payload.cart.id
    );

    if (existingIndex !== -1) {
      state.value[existingIndex] = action.payload.cart;
    } else {
      state.value = [...state.value, action.payload.cart];
    }
    saveStorege("count", state.value);
  },
},

});
export default cart.reducer;
export const { remove, update } = cart.actions;
