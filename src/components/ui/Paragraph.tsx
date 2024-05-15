import clsx from "clsx";

export function Paragraph({ children, className }: { children: string; className?: string }) {
    return (
        <p
            className={clsx(
                "font-mono font-semibold text-base text-left text-pretty text-slate-900/75 max-w-3/4",
                className
            )}
        >
            {children}
        </p>
    );
}
