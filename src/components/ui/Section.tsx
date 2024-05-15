import clsx from "clsx";

export function Section({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <section
            className={clsx(
                "flex items-center px-12 py-12 md:py-6 min-h-[400px] border-y border-slate-800 border-opacity-10",
                className
            )}
        >
            {children}
        </section>
    );
}
