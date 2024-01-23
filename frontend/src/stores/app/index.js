import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: localStorage.getItem("ui-theme") || "system",
};

const app = createSlice({
  name: "app",
  initialState,
  reducers: {
    _setTheme: (state, action) => {
      state.theme = action.payload;
      localStorage.setItem("ui-theme", action.payload);
    },
  },
});

export const { _setTheme } = app.actions;
export default app.reducer;
