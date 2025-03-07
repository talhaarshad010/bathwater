import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
};

const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    SaveUser: (state, action) => {
      state.data = action.payload;
    },
  },
});
export const { SaveUser } = authSlice.actions;
export default authSlice.reducer;
