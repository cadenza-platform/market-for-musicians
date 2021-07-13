import { createSlice } from '@reduxjs/toolkit'

export const viewSlice = createSlice({
    name: 'view',
    initialState: {
        user: 'Fan',
        collapse: 'closed',
        waitlist: false
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
        },
        toggleWaitlistShow: state => {
            state.waitlist = true;
        },
        toggleWaitlistHide: state => {
            state.waitlist = false
        }
    }
});

export const {
    toggleArtist,
    toggleFan,
    toggleCollapseOpen,
    toggleCollapseClose,
    toggleWaitlistShow,
    toggleWaitlistHide
} = viewSlice.actions;

export const selectView = state => state.view.user;

export const selectCollapse = state => state.view.collapse;

export const selectWaitlist = state => state.view.waitlist;

export const viewReducer = viewSlice.reducer;
