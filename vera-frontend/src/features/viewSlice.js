import { createSlice } from '@reduxjs/toolkit'

export const viewSlice = createSlice({
    name: 'view',
    initialState: {
        value: 'Fan'
    },
    reducers: {
        toggleArtist: state => {
            state.value = 'Artist';
        },
        toggleFan: state => {
            state.value = 'Fan';
        }
    }
});

export const { toggleArtist, toggleFan } = viewSlice.actions;

export const selectView = state => state.view.value;

export const viewReducer = viewSlice.reducer;
