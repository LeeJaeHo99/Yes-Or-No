import "../../public/fonts/fonts.css";
import "../styles/globals.css";
import "../styles/media.css";
import Header from "../components/Header";
import ReduxProvider from "../store/ReduxProvider";

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
