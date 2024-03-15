import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import {
  register,
  logIn,
  logOut,
  refreshUser,
  editProfile,
} from '../auth/authOperations';
import {
  addCard,
  deleteCard,
  editCard,
} from 'store/dashboards/dashboardsOperations';

const initialState = {
  user: { name: '', email: '' },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
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
      })
      .addCase(editProfile.fulfilled, (state, { payload }) => {
        console.log('payload: ', payload);
        state.user.name = payload.name;
        state.user.email = payload.email;
        // state.user.theme = payload.theme;
        state.user.avatarURL = payload.avatarURL;
        state.isRefreshing = false;
        state.error = null;
        // toast.success('User Updated!');
      })
      .addCase(editProfile.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(editProfile.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.error = payload;
        toast.error(payload);
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

export const authReducer = authSlice.reducer;
