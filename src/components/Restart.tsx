import Image from 'next/image';

type RestartType = {
    result?: string;
}

export default function Restart({result}: RestartType){
    const refreshHandler = () => {
        window.location.reload();
    }

    return(
        <div className='flex flex-col items-center cursor-pointer' onClick={refreshHandler}>
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