"use client";

// 📍 GROUP : HOOK
import { useState, useEffect } from "react";

// 📍 GROUP : IMAGE
import Image from "next/image";

// 📍 GROUP : COMPONENT
import Inner from "@/components/Inner";
import PixelBox from "@/components/PixelBox";
import Boy from '@/components/Boy';

// 📍 GROUP : DATA
import { lotteryNumData } from "@/data/data";
import { lotteryTextData } from '../../data/data';

// 🗝️ TYPE
type LotteryWrapProps = {
    lotteryHandler: () => void;
}
type LotteryResultProps = {
    shuffledNum: number[],
    showBoy: boolean,
}

export default function LottoPage() {
    const [shuffledNum, setShuffledNum] = useState<number[]>([]);
    
    // 🤖 WORK : 랜덤으로 번호 6개 뽑기
    const pickRandomNum = () => {
        const shuffled = [...lotteryNumData]
            .sort(() => Math.random() - 0.5)
            .slice(0, 6);
        setShuffledNum(shuffled);
        return shuffled;
    };

    const [lottery, setLottery] = useState(false);
    const lotteryHandler = () => {
        setLottery(true);
        pickRandomNum();
    };

    const [showBoy, setShowBoy] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setShowBoy(true)
        }, 800);
    }, [lottery]);

    return (
        <Inner justify={"start"}>
            {lottery ? <LotteryResult shuffledNum={shuffledNum} showBoy={showBoy}/> : <LotteryWrap lotteryHandler={lotteryHandler}/>}
        </Inner>
    );
}

function LotteryWrap({ lotteryHandler }: LotteryWrapProps) {
    const [sWidth, setSWidth] = useState("");
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 450 && window.innerHeight <= 650) {
                setSWidth("half");
            } else {
                setSWidth("");
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="flex items-center justify-center flex-col">
            <Image
                className="lottery-img mt-24 mb-10 ml-2"
                src={"/images/lottery.gif"}
                width={240}
                height={240}
                alt="로또"
                unoptimized
            />
            <PixelBox text={"추첨"} size={`${sWidth}`} lotteryHandler={lotteryHandler} />
            <div className="bot-text mt-6 text-gray-500 font-DGM text-lg">
                ※ 1 ~ 45까지의 숫자 중 랜덤으로 6개의 숫자가 추출됩니다.
            </div>
        </div>
    );
}

function LotteryResult({ shuffledNum, showBoy }: LotteryResultProps) {
    const refreshHandler = () => {
        window.location.reload();
    };
    const getBallColor = (number: number) => {
        if (number >= 1 && number <= 10) return 'bg-yellow-300';
        if (number >= 11 && number <= 20) return 'bg-blue-300';
        if (number >= 21 && number <= 30) return 'bg-red-300';
        if (number >= 31 && number <= 40) return 'bg-gray-300';
        return 'bg-green-300'; // 41-45
    };

    const randomLotteryText = lotteryTextData.sort(() => Math.random() - 0.5);
    const randomSpeechText = randomLotteryText[0];

    return (
        <div className="ball-wrap mt-40">
            <div className="flex items-center justify-center flex-wrap gap-6 w-full px-4">
                {shuffledNum.map((number: number, i: number) => {
                    return (
                        <div
                            key={i}
                            className={`lottery-ball flex items-center justify-center w-16 h-16 rounded-full font-DGM text-xl overflow-hidden ${getBallColor(number)} animate-bigger`}
                        >
                            <div className="flex items-center justify-center w-9 h-9 bg-white rounded-full">
                                {number}
                            </div>
                        </div>
                    );
                })}
            </div>
            <div
                className="restart-component flex flex-col items-center mt-14 cursor-pointer"
                onClick={refreshHandler}
            >
                <Image
                    src={"/images/rainbow.png"}
                    width={60}
                    height={60}
                    alt="무지개 이미지"
                />
                <span className="font-DGM">다시 하기</span>
            </div>
            {showBoy ? <Boy mainText={randomSpeechText}/> : ''}
        </div>
    );
}