import { Heading } from "@/components/ui/Heading";
import { Headline } from "@/components/ui/Headline";
import { MenuIcon } from "@/components/ui/Icons";
import { Link } from "@/components/ui/Link";
import "@/styles/index.css";
import clsx from "clsx";
import type { AppProps } from "next/app";

import {
    Plus_Jakarta_Sans as PlusJakartaSans,
    Source_Code_Pro as SourceCodePro,
} from "next/font/google";

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
        <nav className="flex items-center justify-between px-12 py-6 w-full border-b border-b-slate-800 border-opacity-10">
            <div className="flex flex-row-reverse gap-3 items-center md:gap-0 md:flex-col md:items-start">
                <Headline>Software Engineer</Headline>
                <Heading className="text-3xl hidden md:block">Nathan Lodge</Heading>
                <h1 className="block md:hidden text-4xl text-primary-900 font-extrabold font-mono tracking-tighter leading-none">
                    NL
                </h1>
            </div>
            <ul className="hidden md:flex flex-row gap-8">
                <li>
                    <Link href="/featured-project">Featured Project</Link>
                </li>
                <li>
                    <Link href="/class-projects">Class Projects</Link>
                </li>
            </ul>
            <button
                type="button"
                className="flex items-center justify-center min-w-11 min-h-11 text-primary-900 md:hidden"
            >
                <MenuIcon />
            </button>
        </nav>
    );
}
