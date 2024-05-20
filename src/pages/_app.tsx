import { Heading } from "@/components/ui/Heading";
import { Headline } from "@/components/ui/Headline";
import { CloseIcon, MenuIcon } from "@/components/ui/Icons";
import { Link } from "@/components/ui/Link";
import { Paragraph } from "@/components/ui/Paragraph";
import "@/styles/index.css";
import clsx from "clsx";
import type { AppProps } from "next/app";
import NextLink from "next/link";

import {
    Plus_Jakarta_Sans as PlusJakartaSans,
    Source_Code_Pro as SourceCodePro,
} from "next/font/google";
import { RefObject, use, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

const sansFont = PlusJakartaSans({
    weight: "variable",
    style: "normal",
    display: "block",
    preload: true,
    subsets: ["latin"],
    variable: "--font-sans",
});

const monospaceFont = SourceCodePro({
    weight: "variable",
    style: "normal",
    display: "block",
    preload: true,
    subsets: ["latin"],
    variable: "--font-mono",
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Page>
            <Nav />
            <Component {...pageProps} />
            <Footer />
        </Page>
    );
}

function Page({ children }: { children: React.ReactNode }) {
    return (
        <main
            className={clsx(
                "font-sans min-w-screen relative flex flex-col h-full min-h-screen w-full overflow-y-auto overflow-x-hidden bg-background",
                monospaceFont.variable,
                sansFont.variable
            )}
        >
            {children}
        </main>
    );
}

function Nav() {
    return (
        <nav className="relative flex items-center justify-between px-12 py-6 w-full border-b border-b-slate-800 border-opacity-10">
            <NextLink
                href="/"
                className="flex flex-row-reverse gap-3 items-center md:gap-0 md:flex-col md:items-start"
            >
                <Headline className="text-sm">Software Engineer</Headline>
                <Heading className="text-3xl hidden md:block">Nathan Lodge</Heading>
                <h1 className="block md:hidden text-4xl text-primary-900 font-extrabold font-mono tracking-tighter leading-none">
                    NL
                </h1>
            </NextLink>
            <ul className="hidden md:flex flex-row gap-8">
                <li>
                    <Link href="/featured-project">Featured Project</Link>
                </li>
                <li>
                    <Link href="/class-projects">Class Projects</Link>
                </li>
            </ul>
            <Menu />
        </nav>
    );
}

export const PAGE_ROUTES = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "Featured Project",
        href: "/featured-project",
    },
    {
        name: "Class Projects",
        href: "/class-projects",
    },
];

function useOutsideMenuClick<
    T extends HTMLElement = HTMLElement,
    Z extends HTMLButtonElement = HTMLButtonElement
>(menuRef: RefObject<T>, buttonRef: RefObject<Z>, handler: (event: Event) => void) {
    useEffect(() => {
        const listener = (event: Event) => {
            const path = event.composedPath() as HTMLElement[];

            for (const el of path) {
                if (el === menuRef.current || el === buttonRef.current) {
                    return;
                }
            }

            handler(event);
        };

        window.addEventListener("click", listener);

        return () => {
            window.removeEventListener("click", listener);
        };
    }, [menuRef, buttonRef, handler]);
}

function Menu() {
    const menuRef = useRef<HTMLUListElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    useEffect(() => {
        const closeMenu = () => setIsMenuOpen(false);

        router.events.on("routeChangeComplete", closeMenu);
        return () => {
            router.events.off("routeChangeComplete", closeMenu);
        };
    }, [router.events]);

    useOutsideMenuClick(menuRef, buttonRef, () => setIsMenuOpen(false));

    return (
        <>
            <button
                ref={buttonRef}
                type="button"
                className="flex items-center justify-center min-w-11 min-h-11 text-primary-900 md:hidden"
                onClick={() => setIsMenuOpen((prev) => !prev)}
            >
                {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
            <ul
                ref={menuRef}
                data-hidden={!isMenuOpen}
                className={clsx(
                    "md:hidden z-10 absolute flex flex-col gap-2 bg-cream-800/75 backdrop-blur-sm rounded-lg border border-solid border-slate-800/10 top-[110%] left-0 mx-2 py-5 w-[calc(100%-1rem)] text-center",
                    "sm:w-56 sm:left-[unset] sm:top-[90%] sm:right-8 sm:m-0 sm:text-left",
                    !isMenuOpen && "hidden"
                )}
            >
                {PAGE_ROUTES.map(({ name, href }) => (
                    <MenuItem key={name} name={name} href={href} />
                ))}
            </ul>
        </>
    );
}

function MenuItem({ name, href }: { name: string; href: string }) {
    return (
        <li className="relative py-2">
            <Link href={href} className="h-full px-5 capitalize">
                {name}
            </Link>
        </li>
    );
}

function Footer() {
    return (
        <footer className="flex flex-col justify-between items-start px-12 py-14 w-full h-[240px] border-t border-t-slate-800 border-opacity-10">
            <div className="flex flex-row w-full justify-between">
                <div>
                    <Heading className="text-3xl leading-normal">Nathan Lodge</Heading>
                    <Headline className="text-sm">Software Engineer</Headline>
                </div>
                <ul className="flex flex-col gap-1 text-right">
                    <li>
                        <Link isExternal href="https://www.linkedin.com/in/nathan-lodge">
                            LinkedIn
                        </Link>
                    </li>
                    <li>
                        <Link isExternal href="https://twitter.com/hexiiro">
                            Twitter/X
                        </Link>
                    </li>
                    <li>
                        <Link
                            isExternal
                            href="https://www.figma.com/design/1X0gHFNSKEXjqJo00OzYPL/SE137-FINAL"
                        >
                            Project Figma
                        </Link>
                    </li>
                </ul>
            </div>
            <Paragraph className="font-base">&copy; 2024 Nathan Lodge</Paragraph>
        </footer>
    );
}
