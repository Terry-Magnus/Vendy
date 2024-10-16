import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  IUser,
  ICreateUser,
  //   IUpdateUser,
  //   IGetUser,
} from "./api-types";

export const vendyApi = createApi({
  reducerPath: "vendyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_URL}`,
    credentials: "include",
    mode: "cors",
  }),
  tagTypes: [],
  endpoints: (builder) => ({
    getAllUsers: builder.query<IUser[], void>({
      query: () => "users",
    }),
    getUser: builder.query<IUser, void>({
      query: () => "users",
    }),
    createUser: builder.mutation({
      query(body: ICreateUser) {
        return {
          url: "users",
          method: "POST",
          body,
        };
      },
    }),
  }),
});

export const { useGetAllUsersQuery, useGetUserQuery, useCreateUserMutation } =
  vendyApi;
