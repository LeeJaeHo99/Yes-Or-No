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
        speechText: speechText.reducer,
    }
});