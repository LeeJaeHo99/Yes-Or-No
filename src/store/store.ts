import { configureStore, createSlice } from "@reduxjs/toolkit";

const loading = createSlice({
    name: 'loading',
    initialState: false,
    reducers: {
        setLoading(state){
            return !state;
        }
    }
});
export const { setLoading } = loading.actions;

const clickSubmit = createSlice({
    name: 'clickSubmit',
    initialState: true,
    reducers: {
        setClickSubmit(state){
            return !state;
        }
    }
});
export const { setClickSubmit } = clickSubmit.actions;

const inputResult = createSlice({
    name: 'inputResult',
    initialState: '',
    reducers: {
        setInputResult(state, action){
            return action.payload;
        }
    }
});
export const { setInputResult } = inputResult.actions;

const result = createSlice({
    name: 'result',
    initialState: true,
    reducers: {
        setResult(state, action){
            return action.payload;
        }
    }
});
export const { setResult } = result.actions;

const speechText = createSlice({
    name: 'speechText',
    initialState: '내가 한번 검사해줄게!',
    reducers: {
        setSpeechText(state, action){
            return action.payload;
        }
    }
});
export const { setSpeechText } = speechText.actions;

const inputTextNum = createSlice({
    name: 'inputTextNum',
    initialState: 0,
    reducers: {
        setInputTextNum(state, action){
            return action.payload;
        }
    }
});
export const { setInputTextNum } = inputTextNum.actions;

const store = configureStore({
    reducer: {
        loading: loading.reducer,
        clickSubmit: clickSubmit.reducer,
        inputResult: inputResult.reducer,
        result: result.reducer,
        speechText: speechText.reducer,
        inputTextNum: inputTextNum.reducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export default store;