import { configureStore } from '@reduxjs/toolkit';

// Import des Slices
import userReducer from '../SliceReducers/slice.user';
import messageReducer from '../SliceReducers/slice.message';

export default configureStore({
    reducer: {
        user: userReducer,
        message: messageReducer
    }
})