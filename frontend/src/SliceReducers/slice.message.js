import { createSlice } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
  name:"messages",
  initialState: { messageData: null },
  reducers: {
    GET_MESSAGE: (state, {payload}) => {
      state.messageData = payload
    },
    UPDATE_MESSAGE: (state, {payload}) => {
      state.messageData.map((data) => {
        
        if (data._id === payload[0]) {
          console.log('payload: ', data._id, ' / ', payload[0], ' / ', payload[1])
          data.messageTxt = payload[1]
          return { ...data, messageTxt:data.messageTxt}
        } else {
          return data
        }
      })
    },
    DELETE_MESSAGE: (state, {payload}) => {
      const postNoDeleted = state.messageData.filter (function (e) { return e != payload})
      return state.messageData = postNoDeleted;
    }
  }
})

export const { GET_MESSAGE, UPDATE_MESSAGE, DELETE_MESSAGE } = messageSlice.actions;

export default messageSlice.reducer;