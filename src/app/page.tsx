"use client";

// 📍 GROUP : HOOKS
import { useState, useEffect } from "react";

// 📍 GROUP : COMPONENT
import PixelBox from "@/components/PixelBox";
import Inner from "@/components/Inner";
import Boy from "@/components/Boy";

export default function Home() {
    const [show, setShow] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setShow(true);
        }, 3500);
    }, []);

    return (
        <div>
            <Inner>
                {show ? <PixelBoxWrap />: <Boy mainText={`형 이번에도 다 잃으면 엄마한테 짱 혼난다며ㅋㅋ\n 내가 한번 형의 운명을 알려줄게!\n 그렇다고 다 믿지는 말고.`}/>}
            </Inner>
        </div>
    );
}

function PixelBoxWrap() {
    const [sWidth, setSWidth] = useState("");
    useEffect(() => {
        // 🤖 WORK : 스크린 사이즈 낮을 시 PixelBox 축소
        const handleResize = () => {
            if (window.innerWidth < 450 && window.innerHeight <= 650) {
                setSWidth("half");
            } else {
                setSWidth("");
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="pixel-btn--wrap flex items-center justify-center flex-col gap-5 mt-40">
            <PixelBox text={"로또"} href={"lotto"} size={`${sWidth}`} />
            <PixelBox text={"코인"} href={"coin"} size={`${sWidth}`} />
            <PixelBox text={"주식"} href={"stock"} size={`${sWidth}`} />
        </div>
    );
}
