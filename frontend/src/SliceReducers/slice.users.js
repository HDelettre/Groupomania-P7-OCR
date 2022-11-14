import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name:"allUsers",
  initialState: { allUsers: null },
  reducers: {
    GET_ALLUSERS: (state, {payload}) => {
      state.allUsers = payload
    },

    CHANGE_ROLE: (state, {payload}) => {
      state.allUsers.map((data) => {
        console.log ('DISPATCH: ', data.role, ' / ', payload[0], ' / ', payload[1])
        if (data._id === payload[0]) {
          data.role = payload[1];
          //return state.allUsers.role = payload[1]
          return { ...data, role:payload[1] }
        } else {
          return data
        }
      })
    },
  }
})

export const { GET_ALLUSERS, CHANGE_ROLE } = usersSlice.actions;

export default usersSlice.reducer;