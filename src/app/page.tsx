import Header from "../components/Header";
import PixelBox from '../components/PixelBox';

export default function Home() {
    return (
        <div>
            <div className="inner flex flex-col items-center justify-between relative w-full max-w-[1000px] h-full m-auto">
                <Header />
                <div className="pixel-btn--wrap mt-40">
                    <PixelBox text={'로또'}/>
                    <PixelBox text={'코인'}/>
                    <PixelBox text={'주식'}/>
                </div>
            </div>
        </div>
    );
}
