import clsx from "clsx";

export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <div
            className={clsx(
                "flex p-6 rounded-md bg-cream-800 border border-slate-900/10 border-solid",
                className
            )}
        >
            {children}
        </div>
    );
}
