"use client";

import { useState } from "react";

import TextInput from "@/components/TextInput";
import PixelBox from '@/components/PixelBox';

type nameProps = {
    name: string;
}

type InputType = {
    e: string;
}

export default function PixelBoxAndInput({name}: nameProps) {
    const [inputValue, setInpueValue] = useState(name);
    const inputHandler = (e: InputType) => {
        setInpueValue(e.target.value);
    };
    console.log('inputValue: ', inputValue);

    const submitHandler = () => {
        console.log(123);
    }

    return (
        <div className="flex items-center justify-center gap-5 w-full">
            <TextInput name={name} change={inputHandler}/>
            <PixelBox text={"제출"} size={"half"} click={submitHandler}/>
        </div>
    );
}
