import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  id?: string | null;
  accessToken?: string | null;
}

export interface UserAuthState {
  user: UserState;
}

const initialState: UserAuthState = {
  user: {
    id: null,
    accessToken: null,
  },
};

export const userAuthSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    update: (state, action) => {
      state.user = { ...action.payload };
    },
    destroy: (state) => {
      state.user = {
        id: null,
        accessToken: null,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { update, destroy } = userAuthSlice.actions;

export default userAuthSlice.reducer;
