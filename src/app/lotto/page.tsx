"use client";

import Image from "next/image";
import PixelBox from "@/components/PixelBox";
import { useState } from "react";
import { lotteryNumData } from "@/data/data";

export default function LottoPage() {
    const [shuffledNum, setShuffledNum] = useState<number[]>([]);
    const pickRandomNum = () => {
        const shuffled = [...lotteryNumData].sort(() => Math.random() - 0.5).slice(0, 6);
        setShuffledNum(shuffled);
        return shuffled;
    };

    const [lottery, setLottery] = useState(false);
    const lotteryHandler = () => {
        setLottery(true);
        pickRandomNum();
    };

    return (
        <>
            {lottery ? <LotteryResult shuffledNum={shuffledNum}/> : <LotteryWrap lotteryHandler={lotteryHandler}/>}
        </>
    );
}

function LotteryWrap({lotteryHandler}) {
    return (
        <div className="flex items-center justify-center flex-col">
            <Image
                className="mt-24 mb-10 ml-2"
                src={"/images/lottery.gif"}
                width={240}
                height={240}
                alt="로또"
            />
            <PixelBox text={"추첨"} size={""} lotteryHandler={lotteryHandler} />
            <div className="mt-6 text-gray-500 font-DGM text-lg">
                ※ 1 ~ 45까지의 숫자 중 랜덤으로 6개의 숫자가 추출됩니다.
            </div>
        </div>
    );
}

function LotteryResult({shuffledNum}){
    return(
        <div>
            {shuffledNum}
        </div>
    );
}