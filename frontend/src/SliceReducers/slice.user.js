import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userConnected",
  initialState: { userData: null },
  reducers: {
    GET_USER: (state, { payload }) => {
      state.userData = payload;
    },

    NEW_MESSAGE: (state, { payload }) => {
      state.userData.posts.push(payload);
    },

    DELETE_POSTREF: (state, { payload }) => {
      const postRef = state.userData.posts.filter(function (e) {
        return e !== payload;
      });
      console.log("DELETE POSTREF: ", postRef);
      state.userData.posts = postRef;
    },

    FOLLOW_USER: (state, { payload }) => {
      if (state.userData.followings.includes(payload)) {
        const unfollow = state.userData.followings.filter(function (e) {
          return e !== payload;
        });
        state.userData.followings = unfollow;
      } else {
        state.userData.followings.push(payload);
      }
    },

    LIKE_USER: (state, { payload }) => {
      if (state.userData.likes.includes(payload)) {
        console.log("unlike");
        const unlike = state.userData.likes.filter(function (e) {
          return e !== payload;
        });
        state.userData.likes = unlike;
      } else {
        console.log("like");
        state.userData.likes.push(payload);
      }
    },

    UPDATE_USER: (state, { payload }) => {
      if (payload[0] !== "") {
        state.userData.story = payload[0];
      }
      if (payload[1]) {
        state.userData.imageUrl = payload[1];
      }
    }
  }
});

export const {
  GET_USER,
  DELETE_POSTREF,
  FOLLOW_USER,
  LIKE_USER,
  UPDATE_USER,
  NEW_MESSAGE
} = userSlice.actions;

export default userSlice.reducer;
