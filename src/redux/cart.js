import { createSlice } from "@reduxjs/toolkit";
import { getStorage, saveStorege } from "../components/helpers";
const cart = createSlice({
  name: "cart",
  initialState: {
    value: getStorage("count") || [
      {
        id: 1,
        username: "Abbos",
        lname: "Abduaxadov",
        phone: +998997773543,
        desc: "Lorem, ipsum dolor.",
      },
      {
        id: 2,
        username: "Ziyodulla",
        lname: "Nigmatullayev",
        phone: +9989977733454,
        desc: "Lorem, ipsum dolor.",
      },
      {
        id: 3,
        username: "Farxod",
        lname: "Ganiyev",
        phone: +998995473644,
        desc: "Lorem, ipsum dolor.",
      },
      {
        id: 4,
        username: "Aziz",
        lname: "Toshmuhammediv",
        phone: +99896564481,
        desc: "Lorem, ipsum dolor.",
      },
      {
        id: 5,
        username: "Saidislomxoja",
        lname: "Saidaliyev",
        phone: +998971152487,
        desc: "Lorem, ipsum dolor.",
      },
      {
        id: 6,
        username: "John",
        lname: "John32",
        phone: +998999985654,
        desc: "Lorem, ipsum dolor.",
      },
      {
        id: 6,
        username: "Shomurod",
        lname: "Shotursunov",
        phone: +998910052674,
        desc: "Lorem, ipsum dolor.",
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
      // Agar foydalanuvchi topilsa, yangilanadi
      state.value[existingIndex] = action.payload.cart;
    } else {
      // Agar foydalanuvchi topilmasa, yangi foydalanuvchi qo'shiladi
      state.value = [...state.value, action.payload.cart];
    }
    saveStorege("count", state.value);
  },
},

});
export default cart.reducer;
export const { remove, update } = cart.actions;
