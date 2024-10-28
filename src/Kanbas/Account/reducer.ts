import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentUser: null,
};
const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    signoOut: (state, action) => {
      state.currentUser = null;
    }
  },
});
export const { setCurrentUser, signoOut } = accountSlice.actions;
export default accountSlice.reducer;

// when you sign out and it makes it so user type is null again. 