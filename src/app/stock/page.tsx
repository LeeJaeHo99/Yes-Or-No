'use client';

import Inner from "@/components/Inner";
import PixelBoxAndInput from "@/components/PixelBoxAndInput";
import Boy from "@/components/Boy";
import Loading from "@/components/Loading";
import Result from '@/components/Result';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { setSpeechText } from '@/store/store';

export default function StockPage() {
    const loading = useSelector((state) => state.loading);
    const clickSubmit = useSelector((state) => state.clickSubmit);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setSpeechText('내가 한번 검사해줄게!'));
    }, [])

    return (
        <>
            {loading && <Loading />}
            <Inner>
                {!clickSubmit && <Result/>}
                {clickSubmit && <PixelBoxAndInput name={"주식 종목"} />}
                <Boy />
            </Inner>
        </>
    );
}
