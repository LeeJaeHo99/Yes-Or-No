import Image from "next/image";
import SpeechBubble from './SpeechBubble';

export default function Boy() {
    return (
        <div className="flex items-center justify-center flex-col w-full mt-16">
            <SpeechBubble/>
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
