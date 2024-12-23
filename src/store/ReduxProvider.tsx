'use client';

import { Provider } from "react-redux";
import store from "./store";

type ReduxProviderType = {
    children: React.ReactNode;
}

export default function ReduxProvider({children}: ReduxProviderType){
    return <Provider store={store}>{children}</Provider>;
}