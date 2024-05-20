/*
 * tabler:          https://tabler-icons.io
 * iconic:          https://iconic.app
 * feather:         https://feathericons.com
 * simple icons:    https://simpleicons.org
 */
import type { PropsWithChildren } from "react";
import { clsx } from "clsx";

export type IconType = (props?: IconProps) => JSX.Element;
export type IconProps = { readonly className?: string };

const Icon = ({ children, className }: PropsWithChildren<IconProps>) => (
    <svg
        viewBox="0 0 24 24"
        className={clsx("h-6 w-6 fill-none stroke-current stroke-2 text-primary-900", className)}
    >
        {children}
    </svg>
);

// UI Icons

export const MenuIcon: IconType = (props) => (
    <Icon {...props}>
        <path d="M4 6l16 0" />
        <path d="M4 12l16 0" />
        <path d="M4 18l16 0" />
    </Icon>
);

export const CloseIcon: IconType = (props) => (
    <Icon {...props}>
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
    </Icon>
);
