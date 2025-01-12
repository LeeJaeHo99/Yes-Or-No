"use client";

// 📍 GROUP : COMPONENT
import Inner from "@/components/Inner";
import PixelBoxAndInput from "@/components/PixelBoxAndInput";
import Boy from "@/components/Boy";
import Loading from "@/components/Loading";
import Result from "@/components/Result";

// 📍 GROUP : HOOK
import { useEffect } from "react";

// 📍 GROUP : REDUX
import { useSelector, useDispatch } from "react-redux";
import { setSpeechText, RootState } from "@/store/store";

// 📍 GROUP : IMAGE
import Image from "next/image";

export default function StockPage() {
    const loading = useSelector((state: RootState) => state.loading);
    const clickSubmit = useSelector((state: RootState) => state.clickSubmit);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setSpeechText("내가 한번 검사해줄게!"));
    }, []);

    return (
        <>
            <h2 className="flex items-center gap-2 mt-10 font-DGM text-3xl text-red-400">
                <span>STOCK</span>
                <Image
                    src={"/images/money.png"}
                    width={36}
                    height={36}
                    alt="money img"
                />
            </h2>
            {loading && <Loading />}
            <Inner>
                {!clickSubmit && <Result />}
                {clickSubmit && <PixelBoxAndInput name={"주식 종목"} />}
                <Boy mainText=''/>
            </Inner>
        </>
    );
}
