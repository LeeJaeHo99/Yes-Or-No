// 📍 GROUP : STYLE
import "../../public/fonts/fonts.css";
import "../styles/globals.css";
import "../styles/media.css";

// 📍 GROUP : COMPONENT
import Header from "@/components/Header";
import ReduxProvider from "@/store/ReduxProvider";

export const metadata = {
    title: "극락만이 락이다",
    description:
        "로또 번호 추첨과 자신이 구매 할 코인이나 주식의 미래를 예측하는 웹사이트이다.",
    keywords: ["로또", "로또번호 추첨", "코인", "비트코인", "주식", "떡상", "떡락",],
    icons: {icon: "/favicon.ico",},
    openGraph: {
        type: "website",
        locale: "ko_KR",
        // url: '',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko" className="h-full">
            <body className="flex items-center justify-start flex-col h-full">
                <ReduxProvider>
                    <Header />
                    {children}
                </ReduxProvider>
            </body>
        </html>
    );
}
