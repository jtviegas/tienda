// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define our single API slice object
export const apiSlice = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: 'api',
  // All of our requests will have URLs starting with '/fakeApi'
  baseQuery: fetchBaseQuery({ baseUrl: '/fakeApi' }),
  tagTypes: ['Item'],
  // The "endpoints" represent operations and requests for this server
  endpoints: builder => ({
    // The `getPosts` endpoint is a "query" operation that returns data
    getItems: builder.query({
      // The URL for the request is '/fakeApi/items'
      query: () => '/items',
      providesTags: (result = [], error, arg) => [
        'Item',
        ...result.map(({ id }) => ({ type: 'Item', id }))
      ]
    }),
    getItem: builder.query({
      // The URL for the request is '/fakeApi/items'
      query: itemId => `/items/${itemId}`,
      providesTags: (result, error, arg) => [{ type: 'Item', id: arg }]
    }),
    addNewItem: builder.mutation({
      query: initialPost => ({
        url: '/items',
        method: 'POST',
        // Include the entire post object as the body of the request
        body: initialPost
      }),
      invalidatesTags: ['Item']
    }),
    editItem: builder.mutation({
      query: item => ({
        url: `/items/${item.id}`,
        method: 'PATCH',
        body: item
      }),
      invalidatesTags: (result, error, arg) => [{ type: 'Item', id: arg.id }]
    })
  })
})

// Export the auto-generated hook for the `getPosts` query endpoint
export const { 
  useGetItemsQuery, 
  useGetItemQuery, 
  useAddNewItemMutation, 
  useEditItemMutation,
} = apiSlice