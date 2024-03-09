
import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from '../auth/authOperations';


const initialState = {
  user: { name: '', email: '' },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
          if (action.payload) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
          }
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.user = { name: '', email: '' };
        state.token = '';
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      });
  },
});

export const authReducer = authSlice.reducer;


