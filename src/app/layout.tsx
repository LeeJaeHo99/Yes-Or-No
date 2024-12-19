import "../../public/fonts/fonts.css"
import "../styles/globals.css";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
            <body className='relative h-[100vh]'>
                {children}
            </body>
        </html>
    );
}
