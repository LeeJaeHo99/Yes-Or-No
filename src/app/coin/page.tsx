'use client';

import Inner from "@/components/Inner";
import PixelBoxAndInput from "@/components/PixelBoxAndInput";
import Boy from "@/components/Boy";
import Loading from "../../components/Loading";
import { useSelector } from "react-redux";

export default function CoinPage() {
    const loading = useSelector((state) => state.loading);

    return (
        <>
            {loading && <Loading />}
            <Inner>
                <PixelBoxAndInput name={"코인 종목"} />
                <Boy />
            </Inner>
        </>
    );
}
