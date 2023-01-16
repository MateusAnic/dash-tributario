import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { confirmRegisterModal, messageRegister } from "./initialState";

export const ConfirmRegisterSlice = createSlice({
  name: "registerModal",
  initialState: confirmRegisterModal,
  reducers: {
    setModalVisible(state, action: PayloadAction<boolean>) {
      state.visible = action.payload;
    },
    setLoadingVisible(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const messageRegisterSlice = createSlice({
  name: "messageRegister",
  initialState: messageRegister,
  reducers: {
    setMessageRegister(state, action: PayloadAction<string>) {
      state.message = action.payload;
    },
  },
});
