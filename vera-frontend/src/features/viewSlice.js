import { createSlice } from '@reduxjs/toolkit'

export const viewSlice = createSlice({
    name: 'view',
    initialState: {
        user: 'Fan',
        collapse: 'closed'
    },
    reducers: {
        toggleArtist: state => {
            state.user = 'Artist';
        },
        toggleFan: state => {
            state.user = 'Fan';
        },
        toggleCollapseOpen: state => {
            state.collapse = 'open';
        },
        toggleCollapseClose: state => {
            state.collapse = 'close';
        }
    }
});

export const {
    toggleArtist,
    toggleFan,
    toggleCollapseOpen,
    toggleCollapseClose
} = viewSlice.actions;

export const selectView = state => state.view.user;

export const selectCollapse = state => state.view.collapse;

export const viewReducer = viewSlice.reducer;
