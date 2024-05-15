import clsx from "clsx";
import NextLink from "next/link";

interface LinkProps {
    children: React.ReactNode;
    href: string;
    isPrimary?: boolean;
    isExternal?: boolean;
    className?: string;
}

export function Link({ children, href, isPrimary, isExternal, className }: LinkProps) {
    return (
        <NextLink
            href={href}
            className={clsx(
                "font-mono font-semibold text-base underline",
                isPrimary && "text-primary-800",
                className
            )}
        >
            {children}
            {isExternal ? "↗" : ""}
        </NextLink>
    );
}
