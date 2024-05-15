import clsx from "clsx";
import NextLink from "next/link";

interface LinkProps {
    children: React.ReactNode;
    href: string;
    isNotPrimary?: boolean;
    isExternal?: boolean;
    className?: string;
}

export function Link({ children, href, isNotPrimary, isExternal, className }: LinkProps) {
    return (
        <NextLink
            href={href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className={clsx(
                "font-sans font-semibold text-base underline",
                !isNotPrimary && "text-primary-800",
                className
            )}
        >
            {children}
            {isExternal ? "↗" : ""}
        </NextLink>
    );
}
