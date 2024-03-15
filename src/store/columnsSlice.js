import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './baseQuery';
import { boardsApi } from './boardsSlice';

export const columnsApi = createApi({
  reducerPath: 'columnsApi',
  baseQuery: baseQuery,
  tagTypes: ['Columns'],
  endpoints: build => ({
    getColumn: build.query({
      query: columnId => ({ url: `/api/columns/${columnId}`, method: 'GET' }),
      providesTags: ['Columns'],
    }),
    createColumn: build.mutation({
      query: ({ column, boardId }) => ({
        url: `/api/columns/${boardId}`,
        method: 'POST',
        body: column,
      }),
      invalidatesTags: ['Columns'],
    }),
    updateColumn: build.mutation({
      query: ({ column, columnId }) => ({
        url: `/api/columns/${columnId}`,
        method: 'PATCH',
        body: column,
      }),
      onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
        const { data } = await queryFulfilled;
        if (data) {
          dispatch(boardsApi.util.invalidateTags(['Board']));
        }
      },
    }),
    deleteColumn: build.mutation({
      query: ({ columnId }) => ({
        url: `/api/columns/${columnId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Columns'],
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
  useGetColumnQuery,
  useCreateColumnMutation,
  useUpdateColumnMutation,
  useDeleteColumnMutation,
} = columnsApi;
