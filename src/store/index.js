import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { authReducer } from 'store/auth/authSlice';
import { themeSlice } from 'store/themeSlice';
import { activeBoardIdSlice } from 'store/activeBoardSlice';
import sidebarReducer from 'store/sidebarSlice';
import { boardsApi } from 'store/boardsSlice';
import { columnsApi } from 'store/columnsSlice';
import { todosApi } from 'store/cardsSlice';
import { filterReducer } from './filterSlice';

const persistConfig = {
  key: 'root',
  storage,
  blackList: [
    boardsApi.reducerPath,
    columnsApi.reducerPath,
    todosApi.reducerPath,
  ],
};

const rootReducer = combineReducers({
  theme: themeSlice.reducer,
  sidebar: sidebarReducer,
  auth: authReducer,
  filter: filterReducer,
  activeBoardId: activeBoardIdSlice.reducer,
  [boardsApi.reducerPath]: boardsApi.reducer,
  [columnsApi.reducerPath]: columnsApi.reducer,
  [todosApi.reducerPath]: todosApi.reducer,
});

export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(boardsApi.middleware, columnsApi.middleware, todosApi.middleware),
});

export const persistor = persistStore(store);
