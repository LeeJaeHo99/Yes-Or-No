// 📍 GROUP : LINK
import Link from "next/link";

export default function Header() {
    return (
        <header className="title-wrap flex items-center justify-center gap-[60px] w-full h-12 mt-16">
            <Link href={'/'}>
                <h1 className="main-title font-DGM text-7xl font-bold text-center">
                    <span className="text-red-300">극</span>
                    <span className="text-orange-300">락</span>
                    <span className="text-yellow-300">만</span>
                    <span className="text-green-300">이</span>
                    <span className="text-blue-300"> 락</span>
                    <span className="text-blue-500">이</span>
                    <span className="text-purple-300">다</span>
                </h1>
            </Link>
        </header>
    );
}