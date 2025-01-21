'use client';

// 📍 GROUP : LINK
import Link from "next/link";

// 📍 GROUP : REDUX
import { setClickSubmit, setLoading, setSpeechText } from '@/store/store';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

// 📍 GROUP : DATA
import { speechTextData } from "@/data/data";

// 🗝️ TYPE : RootState, Props
import { RootState } from '@/store/store';
type PixelBoxProps = {
    text: string;
    size: string;
    href?: string;
    submitHandler?: () => void;
    lotteryHandler?: () => void;
}

export default function PixelBox({ text, size, href, submitHandler, lotteryHandler }: PixelBoxProps) {
    const pixelContent = (
        <div className={`pixel-grid ${size}`}>
        <div className={`pixel-text font-DGM select-none ${size}`}>{text}!</div>

        <div className={`pixel-transparent ${size}`}></div>
        <div className={`pixel-black ${size}`}></div>
        <div className={`pixel-black ${size}`}></div>
        <div className={`pixel-black ${size}`}></div>
        <div className={`pixel-black ${size}`}></div>
        <div className={`pixel-black ${size}`}></div>
        <div className={`pixel-black ${size}`}></div>
        <div className={`pixel-black ${size}`}></div>
        <div className={`pixel-black ${size}`}></div>
        <div className={`pixel-black ${size}`}></div>
        <div className={`pixel-black ${size}`}></div>
        <div className={`pixel-black ${size}`}></div>
        <div className={`pixel-black ${size}`}></div>
        <div className={`pixel-black ${size}`}></div>
        <div className={`pixel-black ${size}`}></div>
        <div className={`pixel-black ${size}`}></div>
        <div className={`pixel-black ${size}`}></div>
        <div className={`pixel-black ${size}`}></div>
        <div className={`pixel-black ${size}`}></div>
        <div className={`pixel-transparent ${size}`}></div>

        <div className={`pixel-black ${size}`}></div>
        <div className={`pixel-lightg ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-lightg ${size}`}></div>
        <div className={`pixel-black ${size}`}></div>

        <div className={`pixel-black ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-black ${size}`}></div>

        <div className={`pixel-black ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-black ${size}`}></div>

        <div className={`pixel-black ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-black ${size}`}></div>

        <div className={`pixel-black ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-black ${size}`}></div>

        <div className={`pixel-black ${size}`}></div>
        <div className={`pixel-lightg ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-white ${size}`}></div>
        <div className={`pixel-lightg ${size}`}></div>
        <div className={`pixel-black ${size}`}></div>

        <div className={`pixel-black ${size}`}></div>
        <div className={`pixel-grey ${size}`}></div>
        <div className={`pixel-lightg ${size}`}></div>
        <div className={`pixel-lightg ${size}`}></div>
        <div className={`pixel-lightg ${size}`}></div>
        <div className={`pixel-lightg ${size}`}></div>
        <div className={`pixel-lightg ${size}`}></div>
        <div className={`pixel-lightg ${size}`}></div>
        <div className={`pixel-lightg ${size}`}></div>
        <div className={`pixel-lightg ${size}`}></div>
        <div className={`pixel-lightg ${size}`}></div>
        <div className={`pixel-lightg ${size}`}></div>
        <div className={`pixel-lightg ${size}`}></div>
        <div className={`pixel-lightg ${size}`}></div>
        <div className={`pixel-lightg ${size}`}></div>
        <div className={`pixel-lightg ${size}`}></div>
        <div className={`pixel-lightg ${size}`}></div>
        <div className={`pixel-lightg ${size}`}></div>
        <div className={`pixel-grey ${size}`}></div>
        <div className={`pixel-black ${size}`}></div>

        <div className={`pixel-transparent ${size}`}></div>
        <div className={`pixel-black ${size}`}></div>
        <div className={`pixel-black ${size}`}></div>
        <div className={`pixel-black ${size}`}></div>
        <div className={`pixel-black ${size}`}></div>
        <div className={`pixel-black ${size}`}></div>
        <div className={`pixel-black ${size}`}></div>
        <div className={`pixel-black ${size}`}></div>
        <div className={`pixel-black ${size}`}></div>
        <div className={`pixel-black ${size}`}></div>
        <div className={`pixel-black ${size}`}></div>
        <div className={`pixel-black ${size}`}></div>
        <div className={`pixel-black ${size}`}></div>
        <div className={`pixel-black ${size}`}></div>
        <div className={`pixel-black ${size}`}></div>
        <div className={`pixel-black ${size}`}></div>
        <div className={`pixel-black ${size}`}></div>
        <div className={`pixel-black ${size}`}></div>
        <div className={`pixel-black ${size}`}></div>
        <div className={`pixel-transparent ${size}`}></div>
    </div>
    );

    const dispatch = useDispatch();
    let result = useSelector((state: RootState) => state.result);
    const inputResult = useSelector((state: RootState) => state.inputResult);

    // 🤖 WORK : input에 글자가 짝수면 true, 홀수면 false -> 각각 다른 텍스트를 랜덤으로 보여줌
    const inputTextNum = inputResult.length;
    result = inputTextNum % 2 === 0 ? true : false;
    const speechContent = result ? speechTextData[0] : speechTextData[1];
    const randomText = speechContent[Math.floor(Math.random() * speechContent.length)];

    if(href) return <Link href={`/${href}`}>{pixelContent}</Link>
    
    if(submitHandler) {
        if(inputResult.length === 0) return; 

        const combineHandler = () => {
            submitHandler();
            dispatch(setLoading());
            
            setTimeout(() => {
                dispatch(setLoading());
                dispatch(setClickSubmit(false));
                dispatch(setSpeechText(randomText));
            }, 1800);
        }
        return <div onClick={combineHandler}>{pixelContent}</div>
    }
    if(lotteryHandler) return <div onClick={lotteryHandler}>{pixelContent}</div>
}