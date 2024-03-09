import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.baseURL = 'https://taskpro-backend-uiwy.onrender.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

// export const register = createAsyncThunk(
//   'auth/register',
//   async (credentials, thunkAPI) => {
//     try {
//       const { data } = await axios.post('/api/users/register', credentials);
//       token.set(data.token);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const logIn = createAsyncThunk('auth/login', async credentials => {
//   try {
//     const { data } = await axios.post('/api/users/login', credentials);
//     token.set(data.token);
//     return data;
//   } catch (error) {
//     toast.error(
//       'Error: "The email address or password is incorrect. Please retry..."'
//     );
//   }
// });

// export const logOut = createAsyncThunk('auth/logout', async () => {
//   try {
//     await axios.post('/api/users/logout');
//     token.unset();
//   } catch (error) {}
// });

// export const refreshUser = createAsyncThunk(
//   'auth/refresh',
//   async (_, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const persistedToken = state.auth.token;
//     if (!persistedToken) {
//       return thunkAPI.rejectWithValue('Oops');
//     }
//     token.set(persistedToken);
//     try {
//       const { data } = await axios.get('/api/users/current');
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
export const addCard = createAsyncThunk(
  'dashboards/addCard',
  async (
    { columnId, title, description, priority, deadline, owner },
    thunkAPI
  ) => {
    try {
      const { data } = await axios.post(`api/todos/${columnId}`, {
        title,
        description,
        priority,
        deadline,
      });
      token.set(data.token);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteCard = createAsyncThunk(
  'dashboards/deleteCard',
  async (todoId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`api/todos/${todoId}`);
      token.set(data.token);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editCard = createAsyncThunk(
  'dashboards/editCard',
  async ({ todoId, title, description, priority, deadline }, thunkAPI) => {
    try {
      const { data } = await axios.patch(`api/todos/${todoId}`, {
        title,
        description,
        priority,
        deadline,
      });
      token.set(data.token);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
