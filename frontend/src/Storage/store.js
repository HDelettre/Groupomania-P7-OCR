import { configureStore } from '@reduxjs/toolkit';

// Import des Slices
import userReducer from '../SliceReducers/slice.user';
import messageReducer from '../SliceReducers/slice.message';
import usersReducer from '../SliceReducers/slice.users';

export default configureStore({
    reducer: {
        user: userReducer,
        users: usersReducer,
        message: messageReducer
    }
});