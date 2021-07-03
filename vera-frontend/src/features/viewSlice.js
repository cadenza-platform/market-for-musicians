import { createSlice } from '@reduxjs/toolkit'

export const viewSlice = createSlice({
    name: 'view',
    initialState: {
        value: 'Investor'
    },
    reducers: {
        toggleView: state => {
            if (state.value == 'Investor') {
                state.value = 'Artist';
            } else if (state.value == 'Artist') {
                state.value = 'Investor';
            }
        }
    }
});

export const { toggleView } = viewSlice.actions;

export const selectView = state => state.view.value;

export const viewReducer = viewSlice.reducer;
