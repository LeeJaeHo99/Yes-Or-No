import "../../public/fonts/fonts.css";
import "../styles/globals.css";
import Header from "../components/Header";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko" className="h-full">
            <body className="flex items-center justify-start flex-col h-full">
                <Header />
                {children}
            </body>
        </html>
    );
}
