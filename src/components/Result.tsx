"use client";
import { useSelector } from "react-redux";

export default function Result() {
    const inputResult = useSelector((state) => state.inputResult);
    const inputTextNum = inputResult.length;
    console.log('inputTextNum: ', inputTextNum);
    let result = useSelector(state => state.result);
    result = inputTextNum % 2 === 0 ? true : false;

    return (
        <div className="text-3xl">
            <span className="font-bold">{inputResult}</span>is {result ? `<span className="text-red-400">떡상</span>` : '떡락'}할 운명입니다
        </div>
    );
}
