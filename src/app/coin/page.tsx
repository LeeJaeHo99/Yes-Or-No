import Inner from "@/components/Inner";
import PixelBoxAndInput from '../../components/PixelBoxAndInput';
import Image from "next/image";

export default function CoinPage() {


    return (
        <Inner>
            <PixelBoxAndInput name={'코인 종목'}/>
            <Image
                src={"/images/boy.png"}
                width={160}
                height={160}
                alt="픽셀 남자 아이"
            />
            <Image
                src={"/images/speech-bubble.png"}
                width={160}
                height={160}
                alt="픽셀 남자 아이"
            />
        </Inner>
    );
}
