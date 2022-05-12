import { configureStore } from "@reduxjs/toolkit";
import { configure } from "@testing-library/react";
import userReducer from '../features/userSlice';

export default configureStore({
    reducer: {
        user: userReducer
    }
})