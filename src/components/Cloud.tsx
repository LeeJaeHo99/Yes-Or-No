'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Cloud(){
    const [cloudOpacity, setCloudOpacity] = useState(0);
    useEffect(() => {
        setCloudOpacity(1);
    }, []);

    return(
        <div className="cloud-wrap relative">
            <Image
                    className={`absolute z-[1] top-10 left-10 transition duration-300`}
                    style={{opacity: `${cloudOpacity}`}}
                    src={'/images/cloud.png'}
                    width={160}
                    height={160}
                    alt='구름 사진'
                />
                <Image
                    className={`absolute z-[2] top-10 left-[-40px] transition duration-400`}
                    style={{opacity: `${cloudOpacity}`}}
                    src={'/images/cloud.png'}
                    width={160}
                    height={160}
                    alt='구름 사진'
                />
                <Image
                    className='relative z-[3] transition duration-500'
                    style={{opacity: `${cloudOpacity}`}}
                    src={'/images/cloud.png'}
                    width={160}
                    height={160}
                    alt='구름 사진'
                />
        </div>
    );
}