// store/authSlice.js

import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isSignedUp: false, // Ensure initial state is false
  },
  reducers: {
    signUp(state) {
      state.isSignedUp = true;
    },
  },
});

export const { signUp } = authSlice.actions;
export default authSlice.reducer;
