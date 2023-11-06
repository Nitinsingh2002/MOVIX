import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    url: {},
    genres: {}
};

export const homeSlice = createSlice({
    name: 'home', // Provide a meaningful name for your slice
    initialState: initialState,
    reducers: {
        getApiConfiguration: (state, action) => {
            state.url = action.payload;
        },
        getGenres: (state, action) => {
            state.genres = action.payload;
        }
    },
});

export const { getApiConfiguration, getGenres } = homeSlice.actions;
export const  homeReducer = homeSlice.reducer
