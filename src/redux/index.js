import { configureStore } from "@reduxjs/toolkit";
import counterSlase from "./counter-slase";
import cart from "./cart";
export const store = configureStore({
  reducer: {
    counter: counterSlase,
    cart,
  },
});
