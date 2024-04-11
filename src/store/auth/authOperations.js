import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { boardsApi } from 'store/boardsSlice';
import { clearActiveBoardId } from 'store/activeBoardSlice';

import 'react-toastify/dist/ReactToastify.css';

axios.defaults.baseURL = 'https://taskpro-backend-uiwy.onrender.com';

const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/api/users/register', credentials);
      setToken(data.user.token);

      await thunkAPI.dispatch(boardsApi.util.invalidateTags(['Boards']));

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/api/users/login', credentials);
      setToken(data.token);

      await thunkAPI.dispatch(boardsApi.util.invalidateTags(['Boards']));

      return data;
    } catch (error) {
      toast.error(
        'Error: "The email address or password is incorrect. Please retry..."'
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    thunkAPI.dispatch({ type: 'auth/clearState' });

    await axios.post('/api/users/logout');

    localStorage.removeItem('token');
    clearToken();

    thunkAPI.dispatch(clearActiveBoardId());
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue('Oops');
    }
    setToken(persistedToken);
    try {
      const { data } = await axios.get('/api/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editProfile = createAsyncThunk(
  'auth/editProfile',
  async ({ formData, token }, thunkAPI) => {
    try {
      const resp = await axios.patch('api/users', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      return resp.data.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const handleGoogleAuth = createAsyncThunk(
  'auth/handleAuth',
  async (_, thunkAPI) => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get('accessToken');

      if (token) {
        setToken(token);
        thunkAPI.dispatch({
          type: 'auth/saveTokens',
          payload: { token },
        });

        return { token };
      } else {
        return thunkAPI.rejectWithValue(
          'Access token or refresh token is missing'
        );
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
