import { configureStore, createSlice } from "@reduxjs/toolkit";

let loading = createSlice({
    name: 'loading',
    initialState: false,
    reducers: {
        setLoading(state){
            return !state;
        }
    }
});
export let { setLoading } = loading.actions;

let clickSubmit = createSlice({
    name: 'clickSubmit',
    initialState: true,
    reducers: {
        setClickSubmit(state){
            return !state;
        }
    }
});
export let { setClickSubmit } = clickSubmit.actions;

let inputResult = createSlice({
    name: 'inputResult',
    initialState: '',
    reducers: {
        setInputResult(state, action){
            return action.payload;
        }
    }
});
export let { setInputResult } = inputResult.actions;

export default configureStore({
    reducer: {
        loading: loading.reducer,
        clickSubmit: clickSubmit.reducer,
        inputResult: inputResult.reducer,
    }
});