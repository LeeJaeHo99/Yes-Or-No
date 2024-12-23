import Inner from "@/components/Inner";
import PixelBoxAndInput from "@/components/PixelBoxAndInput";
import Boy from '@/components/Boy';

export default function StockPage() {
    return (
        <Inner>
            <PixelBoxAndInput name={"주식 종목"} />
            <Boy />
        </Inner>
    );
}
