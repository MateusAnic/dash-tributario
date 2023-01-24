import { configureStore } from "@reduxjs/toolkit";
import {
  ConfirmRegisterSlice,
  messageRegisterSlice,
} from "./registerSlices/slice";
import { selectedCustomer } from "./updateSlices/slice";

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    modalRegister: ConfirmRegisterSlice.reducer,
    messageRegister: messageRegisterSlice.reducer,
    currentCustomer: selectedCustomer.reducer,
  },
});
