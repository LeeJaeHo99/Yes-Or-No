'use client';
import { useSelector } from 'react-redux';

export default function Result(){
    const inputResult = useSelector(state => state.inputResult);
    return <div>{inputResult}</div>
}