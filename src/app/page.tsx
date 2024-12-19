import PixelBox from '../components/PixelBox';

export default function Home() {
    return (
        <div>
            <div className="inner flex flex-col items-center justify-between relative w-full max-w-[1000px] h-full m-auto">
                <div className="pixel-btn--wrap flex items-center justify-center flex-col gap-5 mt-40">
                    <PixelBox text={'로또'} href={'lotto'}/>
                    <PixelBox text={'코인'} href={'coin'}/>
                    <PixelBox text={'주식'} href={'stock'}/>
                </div>
            </div>
        </div>
    );
}
