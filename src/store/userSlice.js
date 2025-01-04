import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currUser: null,
  token: null,  // Add this line to include token in initial state
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrUser: (state, action) => {
      state.currUser = action.payload;
      // Don't set token here, we'll use a separate action for that
    },
    setToken: (state, action) => {
      state.token = action.payload;  // Changed from action.payload.token to action.payload
    },
    clearCurrUser: (state) => {
      state.currUser = null;
      state.token = null;
    },
  },
});

export const { setCurrUser, setToken, clearCurrUser } = userSlice.actions;  // Export setToken
export default userSlice.reducer;
