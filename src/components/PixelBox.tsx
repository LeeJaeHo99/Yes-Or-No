'use client';

import Link from "next/link";

type PixelBoxProps = {
    text: string;
    href?: string;
    size: string;
    onClick?: () => void;
}

export default function PixelBox({ text, href, size, onClick }: PixelBoxProps) {
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

    if(href) return <Link href={`/${href}`}>{pixelContent}</Link>
    if(onClick) return <div onClick={onClick}>{pixelContent}</div>
}
