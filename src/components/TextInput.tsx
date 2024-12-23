"use client";

import { useState } from "react";

type InputName = {
    name: string;
};

export default function TextInput({ name }: InputName) {
    const [inputValue, setInpueValue] = useState(name);
    const inputHandler = (e) => {
        setInpueValue(e.target.value);
    };

    return (
        <div className="pixel-container">
            <input type="text" className="pixel-input" placeholder={`${name}을 적어주세요.`} />
        </div>
    );
}
