import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name:"allUsers",
  initialState: { allUsers: null },
  reducers: {
    GET_ALLUSERS: (state, {payload}) => {
      state.allUsers = payload
    }
  }
})

export const { GET_ALLUSERS } = usersSlice.actions;

export default usersSlice.reducer;