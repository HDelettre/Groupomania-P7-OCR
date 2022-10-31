import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name:"userConnected",
  initialState: { userData: null },
  reducers: {
    GET_USER: (state, {payload}) => {
      state.userData = payload
    }
  }
})

export const { GET_USER } = userSlice.actions;

export default userSlice.reducer;