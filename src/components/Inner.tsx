export default function Inner({ children }) {
    return (
        <div className="inner flex flex-col items-center justify-between relative w-full max-w-[800px] h-full m-auto">
            {children}
        </div>
    );
}
