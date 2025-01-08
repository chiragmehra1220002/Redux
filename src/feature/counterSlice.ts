
import {createSlice} from "@reduxjs/toolkit";

const initialState= { count: 0 };

const counterSlice = createSlice({
    name:"counter",
    initialState: initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        } ,
        reset: (state) => {
            state.count =0;
        }
        
    }
});

export default  counterSlice.reducer;

export const {increment,decrement,reset} = counterSlice.actions;
//? dispatch function(action)  ===> reducer  call===> state change ===> ui update
