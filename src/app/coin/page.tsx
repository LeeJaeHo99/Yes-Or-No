import Inner from "@/components/Inner";
import PixelBoxAndInput from '@/components/PixelBoxAndInput';
import Boy from '@/components/Boy';
import Loading from '../../components/Loading';

export default function CoinPage() {


    return (
        <Inner>
            <Loading/>
            <PixelBoxAndInput name={'코인 종목'}/>
            <Boy/>
        </Inner>
    );
}