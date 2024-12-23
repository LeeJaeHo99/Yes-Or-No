"use client";

import { useState } from "react";
import TextInput from "@/components/TextInput";
import PixelBox from '@/components/PixelBox';

type nameProps = {
    name: string;
}

export default function PixelBoxAndInput({name}: nameProps) {
    const [inputValue, setInputValue] = useState(name);
    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };
    console.log('inputValue: ', inputValue);

    const submitHandler = () => {
        console.log(123);
    }

    const loadHandler = () => {
        console.log(456);
    }

    return (
        <div className="flex items-center justify-center gap-5 w-full">
            <TextInput name={name} change={inputHandler}/>
            <PixelBox text={"제출"} size={"half"} submitHandler={submitHandler} loadHandler={loadHandler}/>
        </div>
    );
}
