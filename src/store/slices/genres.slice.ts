import {IGenre} from "../../interfaces";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IGenreState {
    genres: IGenre[],
    status: null,
    errors: null
}

const initialState: IGenreState = {
    genres: [],
    status: null,
    errors: null
}


export const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {
        setGenresResponse : (state, action:PayloadAction<IGenre[]>)=>{
            state.genres = action.payload
        }
    },
    extraReducers:{}
})

const genreReducer = genreSlice.reducer;
export default genreReducer;

export const {setGenresResponse} = genreSlice.actions