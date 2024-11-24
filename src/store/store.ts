import {combineReducers, configureStore} from "@reduxjs/toolkit";

import genreReducer from "./slices/genres.slice";
import movieReducer from "./slices/movies.slice";


const rootReducer = combineReducers({
    movieReducer,
    genreReducer,
})

export const setUpStore = () => configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setUpStore>;
export type AppDispatch = AppStore['dispatch'];

