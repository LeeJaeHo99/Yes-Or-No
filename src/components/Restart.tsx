// 📍 GROUP : IMAGE
import Image from 'next/image';

// 🗝️ TYPE : Props
type RestartType = {
    result?: string;
}

export default function Restart({result}: RestartType){
    // 🤖 WORK : 페이지 새로고침
    const refreshHandler = () => {
        window.location.reload();
    }

    return(
        <div className='restart-component flex flex-col items-center cursor-pointer' onClick={refreshHandler}>
            <Image
                src={`/images/${result ? 'true' : 'false'}-graph.png`}
                width={60}
                height={60}
                alt='그래프 이미지'
            />
            <span className='font-DGM'>다시 하기</span>
        </div>
    );
}