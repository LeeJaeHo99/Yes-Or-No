import { ReactNodeType } from "@/types/type";

type InnerProps = {
    children: ReactNodeType;
    items?: string;
    justify?: string;
    direction?: string;
}
export default function Inner({ children, items = 'center', justify = 'center', direction = 'col' }: InnerProps) {
    return (
        <div className={`inner flex flex-col items-${items} justify-${justify} flex-${direction} relative w-full max-w-[640px] h-full m-auto`}>
            {children}
        </div>
    );
}