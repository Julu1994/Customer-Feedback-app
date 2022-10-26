import { createSlice } from "@reduxjs/toolkit";

const initialState: { terribleCount: number } = {
    terribleCount: 0,
};

export const terribleSlice = createSlice({
    name: "terrible",
    initialState,
    reducers: {
        terribleIncriment(state) {
            state.terribleCount = state.terribleCount + 1;
        },
    },
});

export const terribleActions = terribleSlice.actions;
