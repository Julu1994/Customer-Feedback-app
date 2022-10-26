import { createSlice } from "@reduxjs/toolkit";

const initialState: { excellentCount: number } = {
    excellentCount: 0,
};

export const excellentSlice = createSlice({
    name: "excellent",
    initialState,
    reducers: {
        excellentIncrement(state) {
            state.excellentCount = state.excellentCount + 1;
        },
    },
});

export const excellentActions = excellentSlice.actions;
