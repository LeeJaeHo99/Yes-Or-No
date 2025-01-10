// 📍 GROUP : IMAGE
import Image from "next/image";

// 📍 GROUP : COMPONENT
import SpeechBubble from './SpeechBubble';

type Props = {
    mainText: string;
}

export default function Boy({ mainText }: Props) {
    return (
        <div className="boy-bubble--wrap flex items-center justify-center flex-col w-full mt-16">
            <SpeechBubble mainText={mainText}/>
            <Image
                className="pixel-boy--component"
                src={"/images/boy.png"}
                width={200}
                height={200}
                alt="픽셀 남자 아이"
            />
        </div>
    );
}