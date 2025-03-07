/** @format */

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../../services/urls';

export const UserAuth = createApi({
  reducerPath: 'userAuth',

  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),

  endpoints: (builder) => ({
    UserRegisteration: builder.mutation({
      query: (body) => ({
        url: '/userRegister',
        method: 'POST',
        body,
      }),
    }),

    getUser: builder.mutation({
      query: (body) => ({
        url: '/getUser',
        method: 'GET',
        body,
      }),
    }),

    CheckUser: builder.mutation({
      query: (uniqueId) => ({
        url: `/CheckUser/${uniqueId}`,
        method: 'GET',
      }),
    }),

    updatePoints: builder.mutation({
      query: (body) => ({
        url: '/updatePoints',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  useUserRegisterationMutation,
  useGetUserMutation,
  useCheckUserMutation,
  useUpdatePointsMutation,
} = UserAuth;
