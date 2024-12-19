import TextInput from "@/components/TextInput";
import Inner from "@/components/Inner";
import PixelBox from "../../components/PixelBox";
import Image from "next/image";

export default function CoinPage() {
    return (
        <Inner>
            <TextInput name={"코인 종목"} />
            <PixelBox text={"제출"} href={"/"} />
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
