import { configureStore } from "@reduxjs/toolkit";
import { badSlice } from "./Features/badSlice";
import { excellentSlice } from "./Features/excellentSlice";
import { goodSlice } from "./Features/goodSlice";
import { mehSlice } from "./Features/mehSlice";
import { terribleSlice } from "./Features/terribleSlice";

export const store = configureStore({
    reducer: {
        terrible: terribleSlice.reducer,
        bad: badSlice.reducer,
        meh: mehSlice.reducer,
        good: goodSlice.reducer,
        excellent: excellentSlice.reducer,
    },
});
