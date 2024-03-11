import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './baseQuery';

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
      query: (column, boardId) => ({
        url: `/api/columns/${boardId}`,
        method: 'POST',
        body: column,
      }),
      invalidatesTags: ['Columns'],
    }),
    updateColumn: build.mutation({
      query: ({ columnId, ...rest }) => ({
        url: `/api/columns/${columnId}`,
        method: 'PATCH',
        body: rest,
      }),
      invalidatesTags: ['Columns'],
    }),
    deleteColumn: build.mutation({
      query: ({ columnId }) => ({
        url: `/api/columns/${columnId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Columns'],
    }),
  }),
});

export const {
  useGetColumnQuery,
  useCreateColumnMutation,
  useUpdateColumnMutation,
  useDeleteColumnMutation,
} = columnsApi;
