import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currUser: null,
  token: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrUser: (state, action) => {
      state.currUser = action.payload;

    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    clearCurrUser: (state) => {
      state.currUser = null;
      state.token = null;
    },
  },
});

export const { setCurrUser, setToken, clearCurrUser } = userSlice.actions; 
export default userSlice.reducer;
