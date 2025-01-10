'use client';

// 📍 GROUP : HOOK
import { useEffect } from 'react';

// 📍 GROUP : COMPONENT
import Inner from "@/components/Inner";
import PixelBoxAndInput from "@/components/PixelBoxAndInput";
import Boy from "@/components/Boy";
import Loading from "@/components/Loading";
import Result from '@/components/Result';

// 📍 GROUP : IMAGE
import Image from 'next/image';

// 📍 GROUP : REDUX
import { useSelector, useDispatch } from "react-redux";
import { setSpeechText, RootState } from '@/store/store';

export default function CoinPage() {
    const loading = useSelector((state: RootState) => state.loading);
    const clickSubmit = useSelector((state: RootState) => state.clickSubmit);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setSpeechText('내가 한번 검사해줄게!'));
    }, [])

    return (
        <>
            <h2 className="flex items-center gap-2 mt-10 font-DGM text-3xl text-yellow-400">
                <span>COIN</span>
                <Image
                    src={'/images/coin.png'}
                    width={36}
                    height={36}
                    alt="coin img"
                />
            </h2>
            {loading && <Loading />}
            <Inner>
                {!clickSubmit && <Result/>}
                {clickSubmit && <PixelBoxAndInput name={"코인 종목"} />}
                <Boy mainText=''/>
            </Inner>
        </>
    );
}
