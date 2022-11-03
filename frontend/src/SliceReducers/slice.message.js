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
          data.messageTxt = payload[1]
          return { ...data, messageTxt:data.messageTxt}
        } else {
          return data
        }
      })
    },
    
    DELETE_MESSAGE: (state, {payload}) => {
      console.log('Payload: ', payload)
      const postNoDeleted = state.messageData.filter (function (e) { return e !== payload})
      console.log('DELETE MESSAGE: ', postNoDeleted);
      return state.messageData = postNoDeleted;
    },

    LIKE_MESSAGE: (state, {payload}) => {
      state.messageData.map((data) => {
        if (data._id === payload[0]) {
          if (data.LikeId.includes(payload[1])) {
            const unlike = data.LikeId.filter (function (e) {return e !== payload[1]})
            data.LikeId = unlike
          } else {
            data.LikeId.push(payload[1])
          }
          return { ...data, LikeId: data.LikeId}
        } else {
          return data
        }
      })
    }
  }
})

export const { GET_MESSAGE, UPDATE_MESSAGE, DELETE_MESSAGE, LIKE_MESSAGE } = messageSlice.actions;

export default messageSlice.reducer;