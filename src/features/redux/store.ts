import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/auth.slice";
// import { authApi } from "./auth/auth.api";
import { vendyApi } from "./admin/api";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // [authApi.reducerPath]: authApi.reducer,
    [vendyApi.reducerPath]: vendyApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      //authApi.middleware,
      vendyApi.middleware
    ),
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;

export type Dispatch = typeof store.dispatch;
