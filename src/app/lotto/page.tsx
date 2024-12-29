'use client';

import Image from 'next/image';
import PixelBox from '@/components/PixelBox';

export default function LottoPage(){
    const lotteryHandler = () => {
        console.log(123);
    }

    return(
        <div className='flex items-center justify-center flex-col'>
            <Image
                className='mt-24 mb-10'
                src={'/images/lottery.gif'}
                width={240}
                height={240}
                alt='로또'
            />
            <PixelBox text={'추첨'} size={''} lotteryHandler={lotteryHandler}/>
            <div className='mt-6 text-gray-500 font-DGM text-lg'>
                ※ 1 ~ 45까지의 숫자 중 랜덤으로 6개의 숫자가 추출됩니다.
            </div>
        </div>
    );
}