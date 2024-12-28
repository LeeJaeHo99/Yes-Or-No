'use client';

import Inner from "@/components/Inner";
import PixelBoxAndInput from "@/components/PixelBoxAndInput";
import Boy from "@/components/Boy";
import Loading from "@/components/Loading";
import Result from '@/components/Result';
import { useSelector } from "react-redux";

export default function StockPage() {
    const loading = useSelector((state) => state.loading);
    const clickSubmit = useSelector((state) => state.clickSubmit);

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
