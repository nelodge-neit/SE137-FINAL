import clsx from "clsx";

export function Heading({ children, className }: { children: string; className?: string }) {
    return (
        <h1 className={clsx("text-4xl text-primary-900 font-extrabold leading-none", className)}>
            {children}
        </h1>
    );
}
