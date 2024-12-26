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

let result = createSlice({
    name: 'result',
    initialState: true,
    reducers: {
        setResult(state, action){
            return action.payload;
        }
    }
});
export let { setResult } = result.actions;

let speechText = createSlice({
    name: 'speechText',
    initialState: '내가 한번 검사해줄게!',
    reducers: {
        setSpeechText(state, action){
            return action.payload;
        }
    }
});
export let { setSpeechText } = speechText.actions;

export default configureStore({
    reducer: {
        loading: loading.reducer,
        clickSubmit: clickSubmit.reducer,
        inputResult: inputResult.reducer,
        result: result.reducer,
        speechText: speechText.reducer,
    }
});