import { createSlice } from '@reduxjs/toolkit';

export const activeBoardIdSlice = createSlice({
  name: 'activeBoardId',
  initialState: null,
  reducers: {
    setActiveBoardId: (state, action) => action.payload,
  },
});

export const { setActiveBoardId } = activeBoardIdSlice.actions;

export const getActiveBoardId = state => state.activeBoardId;
