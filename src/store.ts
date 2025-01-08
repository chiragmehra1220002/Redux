import { configureStore, Store } from "@reduxjs/toolkit";
import counterReducer from "./feature/counterSlice.ts";
export const store: Store = configureStore({
    reducer:{ 
        counter:counterReducer,

    },
});//? to store full states
