'use client';

import Link from "next/link";
import { useDispatch } from 'react-redux';
import { setClickSubmit, setLoading, setSpeechText } from '@/store/store';
import { useSelector } from 'react-redux';
import { speechText } from "@/data/data";

type PixelBoxProps = {
    text: string;
    size: string;
    href?: string;
    submitHandler?: () => void;
}

export default function PixelBox({ text, size, href, submitHandler }: PixelBoxProps) {
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
    )
    const dispatch = useDispatch();
    let result = useSelector(state => state.result);
    let speechContent = result ? speechText[0] : speechText[1];
    let randomText = speechContent[Math.floor(Math.random() * speechContent.length)];

    if(href) return <Link href={`/${href}`}>{pixelContent}</Link>
    if(submitHandler) {
        const combineHandler = () => {
            submitHandler();
            dispatch(setLoading());
            
            setTimeout(() => {
                dispatch(setLoading());
                dispatch(setClickSubmit());
                dispatch(setSpeechText(randomText));
            }, 1800);
        }
        return <div onClick={combineHandler}>{pixelContent}</div>
    }
}