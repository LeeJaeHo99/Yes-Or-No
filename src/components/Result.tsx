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
            <span>{inputResult}</span>는 {result ? '떡상' : '떡락'}할 운명입니다
        </div>
    );
}
