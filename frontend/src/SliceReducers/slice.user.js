import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name:"userConnected",
  initialState: { userData: null },
  reducers: {
    GET_USER: (state, {payload}) => {
      state.userData = payload
    },
    DELETE_POSTREF: (state, {payload}) => {
      const postRef = state.userData.posts.filter (function (e) { return e != payload});
      state.userData.posts = postRef;
    }
  }
})

export const { GET_USER, DELETE_POSTREF } = userSlice.actions;

export default userSlice.reducer;