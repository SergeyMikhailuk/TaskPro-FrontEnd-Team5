import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  register,
  logIn,
  logOut,
  refreshUser,
  editProfile,
  handleGoogleAuth,
} from 'store/auth/authOperations';
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
  reducers: {
    clearState: () => initialState,
  },
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        const { user } = action.payload;
        state.user = user;
        state.token = user.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        const { user, token } = action.payload;
        state.user = user;
        state.token = token;
        state.isLoggedIn = true;
      })
      .addCase(handleGoogleAuth.fulfilled, (state, action) => {
        const { token } = action.payload;
        state.token = token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = initialState.user;
        state.token = initialState.token;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(editProfile.fulfilled, (state, { payload }) => {
        const { name, email, avatarURL } = payload;
        state.user.name = name;
        state.user.email = email;
        state.user.avatarURL = avatarURL;
        state.isRefreshing = false;
        state.error = null;
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
        const { owner } = action.payload;
        const index = state.currentDashboard.columns.findIndex(
          item => item._id === owner
        );
        const { cards } = state.currentDashboard.columns[index];
        if (!cards) {
          state.currentDashboard.columns[index].cards = [action.payload];
        } else {
          cards.push(action.payload);
        }
        state.error = null;
      })
      .addCase(deleteCard.fulfilled, (state, action) => {
        const { owner, _id } = action.payload;
        const indexColumn = state.currentDashboard.columns.findIndex(
          item => item._id === owner
        );
        const { cards } = state.currentDashboard.columns[indexColumn];
        const indexCard = cards.findIndex(item => item._id === _id);
        cards.splice(indexCard, 1);
        state.columnsLength = state.currentDashboard.columns.length;
      })
      .addCase(editCard.fulfilled, (state, action) => {
        const { _id, title, description, priority, deadline, owner } =
          action.payload;
        const indexColumn = state.currentDashboard.columns.findIndex(
          item => item._id === owner
        );
        const { cards } = state.currentDashboard.columns[indexColumn];
        const indexCard = cards.findIndex(item => item._id === _id);
        const updatedCard = {
          ...cards[indexCard],
          title,
          description,
          priority,
          deadline,
        };
        cards[indexCard] = updatedCard;
        state.columnsLength = state.currentDashboard.columns.length;
      });
  },
});

export const { clearState } = authSlice.actions;

export default authSlice.reducer;
