import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    badCount: 0,
};

export const badSlice = createSlice({
    name: "bad",
    initialState,
    reducers: {
        badIncrement(state) {
            state.badCount = state.badCount + 1;
        },
    },
});

export const badActions = badSlice.actions;
