import { createSlice } from '@reduxjs/toolkit';
import { logOut } from 'store/auth/authOperations';

export const modeMenuSlice = createSlice({
  name: 'menuMode',
  initialState: {
    isMenuOpen: false,
  },
  reducers: {
    openMenuMode: state => {
      state.isMenuOpen = true;
    },
    closeMenuMode: state => {
      state.isMenuOpen = false;
    },
  },
  extraReducers: builder => {
    builder

      .addCase(logOut.fulfilled, state => {
        state.isMenuOpen = false;
      });
  },
});

export const { openMenuMode, closeMenuMode } = modeMenuSlice.actions;

export const modeMenuSliceReducer = modeMenuSlice.reducer;