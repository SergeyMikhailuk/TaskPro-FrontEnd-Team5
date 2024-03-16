import { createSlice } from '@reduxjs/toolkit';

export const activeBoardIdSlice = createSlice({
  name: 'activeBoardId',
  initialState: null,
  reducers: {
    setActiveBoardId: (state, action) => action.payload,
    clearActiveBoardId: state => null,
  },
});

export const { setActiveBoardId } = activeBoardIdSlice.actions;
export const { clearActiveBoardId } = activeBoardIdSlice.actions;
