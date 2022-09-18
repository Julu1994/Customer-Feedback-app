import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mehCount: 0,
};

export const mehSlice = createSlice({
    name: "meh",
    initialState,
    reducers: {
        mehIncrement(state) {
            state.mehCount = state.mehCount + 1;
        },
    },
});

export const mehActions = mehSlice.actions;
