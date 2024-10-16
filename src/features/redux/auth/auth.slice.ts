import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../admin/admin-api.types";

interface IAuthInitialState {
  userData: IUser | null;
  //   userToken: string;
}

const initialState: IAuthInitialState = {
  userData: null,
  //   userToken: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserData(state, { payload }) {
      state.userData = payload;
    },
    // setUserToken(state, { payload }) {
    //   state.userToken = payload;
    // },
  },
});

export const { setUserData } = authSlice.actions;

export default authSlice.reducer;
