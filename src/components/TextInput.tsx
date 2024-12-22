"use client";

type InputName = {
    name: string;
};

export default function TextInput({ name }: InputName) {
    return (
        <input
            className="w-3/5 max-w-[400px] py-3 px-3 border border-gray-400 rounded-lg font-DGM outline-none"
            type="text"
            placeholder={`검증을 원하시는 ${name}을 입력해주세요.`}
        />
    );
}

// click으로 이름 변경한걸로 commit 일단 하셈