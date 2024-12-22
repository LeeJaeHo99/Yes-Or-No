"use client";

import { useState } from "react";

type InputName = {
    name: string;
};

export default function TextInput({ name }: InputName) {
    const [inputValue, setInpueValue] = useState(name);
    const inputHandler = (e) => {
        setInpueValue(e.target.value);
    }

    return (
        <input
            className="w-3/5 max-w-[400px] py-3 px-3 border border-gray-400 rounded-lg font-DGM outline-none"
            type="text"
            placeholder={`${name}을 입력해주세요.`}
            onChange={inputHandler}
        />
    );
}