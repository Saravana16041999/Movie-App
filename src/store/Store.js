import { configureStore } from "@reduxjs/toolkit";
import MovieReducer from '../features/Movieslice/Movieslice'

export const store = configureStore({
    reducer: {
        movie : MovieReducer,  
    }
})