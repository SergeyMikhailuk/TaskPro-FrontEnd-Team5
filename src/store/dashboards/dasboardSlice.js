import { createSlice } from '@reduxjs/toolkit';
import { addCard, deleteCard, editCard } from './dashboardsOperations';

const initialState = {
  dashboards: [],
  currentDashboard: {},
  isLoading: false,
  error: null,
  columnsLength: 0,
  currentBg: '',
  currentName: '',
  selectedPriority: 'show all',
};
const dashboardsSlice = createSlice({
  name: 'dashboards',
  initialState,
  reducers: {
    selectPriority(state, action) {
      state.selectedPriority = action.payload;
    },
  },
  extraReducers: builder => {
    builder

      .addCase(addCard.pending, state => {
        state.isLoading = true;
      })
      .addCase(addCard.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addCard.fulfilled, (state, action) => {
        state.isLoading = false;

        const index = state.currentDashboard.columns.findIndex(
          item => item._id === action.payload.owner
        );

        if (!state.currentDashboard.columns[index].cards) {
          state.currentDashboard.columns[index].cards = [];
        }

        state.currentDashboard.columns[index].cards.push(action.payload);

        state.error = null;
      })

      .addCase(deleteCard.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteCard.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteCard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        const indexColumn = state.currentDashboard.columns.findIndex(
          item => item._id === action.payload.owner
        );

        const indexCard = state.currentDashboard.columns[
          indexColumn
        ].cards.findIndex(item => item._id === action.payload._id);

        state.currentDashboard.columns[indexColumn].cards.splice(indexCard, 1);
        state.columnsLength = state.currentDashboard.columns.length;
      })

      .addCase(editCard.pending, state => {
        state.isLoading = true;
      })
      .addCase(editCard.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(editCard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        const { _id, title, description, priority, deadline, owner } =
          action.payload;

        const indexColumn = state.currentDashboard.columns.findIndex(
          item => item._id === owner
        );

        const indexCard = state.currentDashboard.columns[
          indexColumn
        ].cards.findIndex(item => item._id === _id);

        state.currentDashboard.columns[indexColumn].cards[indexCard] = {
          ...state.currentDashboard.columns[indexColumn].cards[indexCard],
          title,
          description,
          priority,
          deadline,
        };
        state.columnsLength = state.currentDashboard.columns.length;
      });
  },
});

export const { selectPriority } = dashboardsSlice.actions;

export const dashboardsReducer = dashboardsSlice.reducer;
