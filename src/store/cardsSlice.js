import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './baseQuery';
import { boardsApi } from './boardsSlice';

export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: baseQuery,
  tagTypes: ['Todos'],
  endpoints: build => ({
    getTodo: build.query({
      query: todoId => ({ url: `/api/todos/${todoId}`, method: 'GET' }),
      providesTags: ['Todos'],
    }),
    createTodos: build.mutation({
      query: ({ columnId, ...rest }) => ({
        url: `/api/todos/${columnId}`,
        method: 'POST',
        body: rest,
      }),
      invalidatesTags: ['Todos'],

      onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
        console.log(boardsApi);
        const { data } = await queryFulfilled;
        if (data) {
          dispatch(boardsApi.util.invalidateTags(['Board']));
        }
      },
    }),
    updateTodos: build.mutation({
      query: ({ todoId, ...rest }) => ({
        url: `/api/todos/${todoId}`,
        method: 'PATCH',
        body: rest,
      }),
      invalidatesTags: ['Todos'],
      onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
        console.log('Contact');
        const { data } = await queryFulfilled;
        if (data) {
          dispatch(boardsApi.util.invalidateTags(['Board']));
        }
      },
    }),
    deleteTodos: build.mutation({
      query: ({ todoId }) => ({
        url: `/api/todos/${todoId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Todos'],
      onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
        const { data } = await queryFulfilled;
        if (data) {
          dispatch(boardsApi.util.invalidateTags(['Board']));
        }
      },
    }),
    changeTodosColumn: build.mutation({
      query: ({ todoId, columnId }) => ({
        url: `/api/todos/${todoId}/owner${columnId}`,
        method: 'PATCH',
      }),
      invalidatesTags: ['Todos'],
      onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
        const { data } = await queryFulfilled;
        if (data) {
          dispatch(boardsApi.util.invalidateTags(['Board']));
        }
      },
    }),
  }),
});

export const {
  useGetTodoQuery,
  useCreateTodosMutation,
  useUpdateTodosMutation,
  useDeleteTodosMutation,
  useChangeTodosColumnMutation,
} = todosApi;
