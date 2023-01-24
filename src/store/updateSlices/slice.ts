import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Customer } from "../interfaces/Customer";
import { currentCustomer } from "./initialState";

export const selectedCustomer = createSlice({
  name: "selectedCustomer",
  initialState: currentCustomer,
  reducers: {
    setCurrentCustomer(state, action: PayloadAction<Customer>) {
      state = action.payload;
    },
  },
});
