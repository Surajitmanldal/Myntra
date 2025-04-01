import { createSlice } from "@reduxjs/toolkit";
const fetchStatusSlice = createSlice({
    name: 'fetchStatus',
    initialState: {
        apifetchDone: false,
        currentlyFecthing: true
    },
    reducers: {
        markFetchDone: (store) => {
            store.apifetchDone = true;
        },
        markFetchingStarted: (store) => {
            store.currentlyFecthing = true;
        },
        markFetchingEnded: (store, action) => {
            store.currentlyFecthing = false;
        }
    }
})
export const fetchStatusActions = fetchStatusSlice.actions;
export default fetchStatusSlice;
