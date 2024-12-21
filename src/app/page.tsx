import PixelBox from '../components/PixelBox';
import Inner from '../components/Inner';

export default function Home() {
    return (
        <div>
            <Inner>
                <div className="pixel-btn--wrap flex items-center justify-center flex-col gap-5 mt-40">
                    <PixelBox text={'로또'} href={'lotto'} size={''}/>
                    <PixelBox text={'코인'} href={'coin'} size={''}/>
                    <PixelBox text={'주식'} href={'stock'} size={''}/>
                </div>
            </Inner>
        </div>
    );
}
