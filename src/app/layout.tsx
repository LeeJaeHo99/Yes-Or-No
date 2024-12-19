import "../../public/fonts/fonts.css"
import "../styles/globals.css";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
            <body className='bg-blue-100'>{children}</body>
        </html>
    );
}
