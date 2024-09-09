import { createSlice } from "@reduxjs/toolkit";
import { saveStorege } from "../components/helpers";
import { getStorage } from "../components/helpers";
const counter = createSlice({
  name: "counter",
  initialState: {
    value: +getStorage("count") || 9,
  },
  reducers: {
    inc: (state, action) => {
      state.value += 1;
      saveStorege("count", state.value);
    },
    dec: (state) => {
      state.value -= 1;
      saveStorege("count", state.value);
    },
    res: (state) => {
      state.value = 0;
      saveStorege("count", state.value);
    },
  },
});
export const { inc, dec, res } = counter.actions;
export default counter.reducer;
