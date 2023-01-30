import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { dataGrid } from "./initialState";

export const dataGridSlice = createSlice({
  name: "dataGrid",
  initialState: dataGrid,
  reducers: {
    setDataGridData(state, action: PayloadAction<any>) {
      state.data = action.payload;
    },
  },
});
