import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './baseQuery';

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
      query: (todo, columnId) => ({
        url: `/api/todos/${columnId}`,
        method: 'POST',
        body: todo,
      }),
      invalidatesTags: ['Todos'],
    }),
    updateTodos: build.mutation({
      query: ({ todoId, ...rest }) => ({
        url: `/api/todos/${todoId}`,
        method: 'PATCH',
        body: rest,
      }),
      invalidatesTags: ['Todos'],
    }),
    deleteTodos: build.mutation({
      query: ({ todoId }) => ({
        url: `/api/todos/${todoId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Todos'],
    }),
    changeTodosColumn: build.mutation({
      query: ({ todoId, columnId }) => ({
        url: `/api/todos/${todoId}/owner${columnId}`,
        method: 'PATCH',
      }),
      invalidatesTags: ['Todos'],
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
