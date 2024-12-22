"use client";

import TextInput from "@/components/TextInput";
import PixelBox from '@/components/PixelBox';

type nameProps = {
    name: string;
}

export default function PixelBoxAndInput({name}: nameProps) {
    const submitCoin = () => {
        console.log(123);
    }

    return (
        <div className="flex items-center justify-center gap-5 w-full">
            <TextInput name={name} />
            <PixelBox text={"제출"} size={"half"} click={submitCoin}/>
        </div>
    );
}
