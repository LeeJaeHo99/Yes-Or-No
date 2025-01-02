"use client";
import { useSelector } from "react-redux";
import Restart from './Restart';

export default function Result() {
    const inputResult = useSelector((state) => state.inputResult);
    const inputTextNum = inputResult.length;
    let result = useSelector(state => state.result);
    result = inputTextNum % 2 === 0 ? true : false;

    return (
        <>
            <div className="result-text mb-6 font-DGM text-3xl">
                <span className="font-extrabold">{inputResult}</span> is 
                <span className="font-extrabold text-4xl text-blue-400" style={{ color: result ? '#f87171' : '#60a5fa' }}>
                    {result ? ` 떡상` : ' 떡락'}
                </span> 할 운명입니다.
            </div>
            <Restart result={result}/>
        </>
    );
}