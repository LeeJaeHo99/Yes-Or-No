'use client';

import Link from "next/link";
import { useDispatch } from 'react-redux';
import { setLoading } from '@/store/store';

type PixelBoxProps = {
    text: string;
    size: string;
    href?: string;
    submitHandler?: () => void;
    loadHandler?: () => void;
}

export default function PixelBox({ text, size, href, submitHandler, loadHandler }: PixelBoxProps) {
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

    if(href) return <Link href={`/${href}`}>{pixelContent}</Link>
    if(submitHandler && loadHandler) {
        const combineHandler = () => {
            submitHandler();
            loadHandler();
            dispatch(setLoading());
            
            setTimeout(() => {
                dispatch(setLoading());
            }, 1800);
        }
        return <div onClick={combineHandler}>{pixelContent}</div>
    }
}