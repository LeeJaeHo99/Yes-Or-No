'use client';

import Inner from "@/components/Inner";
import PixelBoxAndInput from "@/components/PixelBoxAndInput";
import Boy from "@/components/Boy";
import Loading from "@/components/Loading";
import Result from '@/components/Result';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { setSpeechText } from '@/store/store';
import Image from 'next/image';

export default function CoinPage() {
    const loading = useSelector((state) => state.loading);
    const clickSubmit = useSelector((state) => state.clickSubmit);
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
                <Boy />
            </Inner>
        </>
    );
}
