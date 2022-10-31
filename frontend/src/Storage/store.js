import { configureStore } from '@reduxjs/toolkit';

// Import des Slices
import userReducer from '../SliceReducers/slice.user';

export default configureStore({
    reducer: {
        user: userReducer,
    }
})