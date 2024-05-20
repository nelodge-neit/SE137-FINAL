import clsx from "clsx";

export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <div
            className={clsx(
                "flex p-6 rounded-md bg-cream-900 border border-slate-900/75 border-solid",
                className
            )}
        >
            {children}
        </div>
    );
}