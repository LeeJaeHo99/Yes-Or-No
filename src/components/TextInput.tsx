"use client";

// 📍 GROUP : REDUX
import { setInputResult } from '@/store/store';
import { useDispatch } from 'react-redux';

// 🗝️ TYPE : Props
type InputName = {
    name: string;
};

export default function TextInput({ name }: InputName) {
    const dispatch = useDispatch();
    const inputTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setInputResult(e.target.value));
    }

    return (
        <div className="pixel-container">
            <input type="text" className="pixel-input" placeholder={`${name}을 적어주세요.`} onChange={inputTextHandler}/>
        </div>
    );
}