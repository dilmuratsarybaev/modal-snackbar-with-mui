import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  snackbar: {
    isOpen: false,
    severity: "",
    message: "",
  },
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    showSnackbar(state, action) {
      state.snackbar.isOpen = true;
      state.snackbar.message = action.payload.message;
      state.snackbar.severity = action.payload.severity;
    },
    closeSnackbar(state) {
      state.snackbar.isOpen = false;
    },
  },
});

export const uiActions = uiSlice.actions;
