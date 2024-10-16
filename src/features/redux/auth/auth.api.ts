import { vendyApi } from "../admin/api";
import { IUpdateUser, IUser } from "../admin/admin-api.types";

export const authApi = vendyApi.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (body: any) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
    }),
    signUp: builder.mutation({
      query: (data: IUser) => ({
        url: "/auth/signup",
        method: "POST",
        body: data,
      }),
    }),
    forgotPassword: builder.mutation({
      query: (body: string) => ({
        url: `/auth/forgot-password`,
        method: "POST",
        body,
      }),
    }),
    resetPassword: builder.mutation({
      query: ({ email, ...rest }) => ({
        url: `/auth/password-reset?email=${email}`,
        method: "POST",
        body: rest,
      }),
    }),
    signOut: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
    }),
    getCurrentUser: builder.query<IUser, void>({
      query: () => "/auth/profile",
    }),
    updateProfile: builder.mutation({
      query: (data: IUpdateUser) => ({
        url: "/auth/profile",
        method: "POST",
        body: data,
        prepareHeaders: (headers: Headers) => {
          headers.set("Content-Type", "multipart/form-data");
          return headers;
        },
      }),
    }),
    verifyEmail: builder.query({
      query: (token: String) => `/auth/verify-email?token=${token}`,
    }),
    resendVerificationCode: builder.mutation({
      query: (email: String) => ({
        url: `/auth/email/verify/resend`,
        body: email,
      }),
    }),
    // googleOauth: builder.mutation({
    //     query: () => '/auth/google/redirect',
    // }),
    // teamInvite: builder.mutation({
    //     query: ({ email, code }) => `/auth/team-invite/verify?email=${email}&code=${code}`
    // }),
  }),
});

export const {
  useSignInMutation,
  useUpdateProfileMutation,
  useVerifyEmailQuery,
  useGetCurrentUserQuery,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useLazyGetCurrentUserQuery,
  useSignOutMutation,
  useResendVerificationCodeMutation,
} = authApi;
