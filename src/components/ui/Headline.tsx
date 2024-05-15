import clsx from "clsx";

export function Headline({ children, className }: { children: string; className?: string }) {
    return (
        <p className={clsx("font-mono text-xs text-slate-800 font-semibold uppercase", className)}>
            {children}
        </p>
    );
}
