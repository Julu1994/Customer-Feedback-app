import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    goodCount: 0,
};

export const goodSlice = createSlice({
    name: "good",
    initialState,
    reducers: {
        goodIncrement(state) {
            state.goodCount = state.goodCount + 1;
        },
    },
});

export const goodActions = goodSlice.actions;
