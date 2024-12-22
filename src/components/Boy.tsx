import Image from "next/image";

export default function Boy() {
    return (
        <div className="flex items-center justify-center flex-col w-full mt-10">
            <div className="relative flex items-center justify-center w-full">
                <span className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-90%] font-DGM text-3xl text-gray-500 text-center">내가 한번 평가해보지</span>
                <Image
                    style={{width: '60%'}}
                    src={"/images/speech-bubble.png"}
                    width={320}
                    height={320}
                    alt="말풍선"
                />
            </div>
            <Image
                src={"/images/boy.png"}
                width={240}
                height={240}
                alt="픽셀 남자 아이"
            />
        </div>
    );
}
