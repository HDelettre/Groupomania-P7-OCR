import { createSlice } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
  name:"messages",
  initialState: { messageData: null },
  reducers: {
    GET_MESSAGE: (state, {payload}) => {
      state.messageData = payload
    }
  }
})

export const { GET_MESSAGE } = messageSlice.actions;

export default messageSlice.reducer;