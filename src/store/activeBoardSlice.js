import { createSlice } from '@reduxjs/toolkit';

export const activeBoardIdSlice = createSlice({
  name: 'activeBoardId',
  initialState: '',
  reducers: {
    setActiveBoardId: (_, action) => action.payload,
  },
});

export const { setActiveBoardId } = activeBoardIdSlice.actions;

export const getActiveBoardId = state => state.activeBoardId;
