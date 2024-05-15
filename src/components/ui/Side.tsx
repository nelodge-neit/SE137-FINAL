import clsx from "clsx";

export function Side({ children, className }: { children: React.ReactNode; className?: string }) {
    return <div className={clsx("flex basis-1/2 w-full", className)}>{children}</div>;
}
