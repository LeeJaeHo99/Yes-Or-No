'use client';

import PixelBox from "../components/PixelBox";
import Inner from "../components/Inner";
import { useState, useEffect } from "react";
import Boy from '@/components/Boy';

export default function Home() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShow(true);
        }, 3000);
    }, []);


    return (
        <div>
            <Inner>
                {show ? <PixelBoxWrap/> : <Boy mainText={'형 이번에도 다 잃으면 엄마한테 짱 혼난다며ㅋㅋ 내가 한번 형의 운명을 알려줄게! 그렇다고 다 믿지는 말고.'}/> }
            </Inner>
        </div>
    );
}

function PixelBoxWrap() {
    return (
        <div className="pixel-btn--wrap flex items-center justify-center flex-col gap-5 mt-40">
            <PixelBox text={"로또"} href={"lotto"} size={""} />
            <PixelBox text={"코인"} href={"coin"} size={""} />
            <PixelBox text={"주식"} href={"stock"} size={""} />
        </div>
    );
}