"use client";


type InputName = {
    name: string;
    change: () => void;
};

export default function TextInput({ name, change }: InputName) {


    return (
        <div className="pixel-container">
            <input type="text" className="pixel-input" placeholder={`${name}을 적어주세요.`} onChange={change}/>
        </div>
    );
}
