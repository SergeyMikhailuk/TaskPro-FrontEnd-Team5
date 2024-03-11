import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './baseQuery';

export const boardsApi = createApi({
  reducerPath: 'boardsApi',
  baseQuery: baseQuery,
  tagTypes: ['Boards'],
  endpoints: build => ({
    getBoards: build.query({
      query: () => '/api/boards',
      providesTags: ['Boards'],
    }),
    createBoard: build.mutation({
      query: board => ({
        url: '/api/boards',
        method: 'POST',
        body: board,
      }),
      invalidatesTags: ['Boards'],
    }),
    updateBoard: build.mutation({
      query: ({ boardId, ...rest }) => ({
        url: `/api/boards/${boardId}`,
        method: 'PATCH',
        body: rest,
      }),
      invalidatesTags: ['Boards'],
    }),
    deleteBoard: build.mutation({
      query: ({ boardId }) => ({
        url: `/api/boards/${boardId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Boards'],
    }),
  }),
});

export const {
useGetBoardsQuery,
useCreateBoardMutation,
  useUpdateBoardMutation,
  useDeleteBoardMutation,
} = boardsApi;
