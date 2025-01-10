"use client";
import { setInputResult, setInputTextNum } from '@/store/store';
import { useSelector, useDispatch } from 'react-redux';

type InputName = {
    name: string;
};

export default function TextInput({ name }: InputName) {
    const dispatch = useDispatch();
    const inputResult = useSelector(state => state.inputResult);
    const inputTextHandler = (e) => {
        dispatch(setInputResult(e.target.value));
    }
    const inputTextNumHandler = (e) => {
        dispatch(setInputTextNum(e.length));
    }

    return (
        <div className="pixel-container">
            <input type="text" className="pixel-input" placeholder={`${name}을 적어주세요.`} onChange={inputTextHandler}/>
        </div>
    );
}
