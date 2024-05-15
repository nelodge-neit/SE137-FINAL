import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
                mono: ["var(--font-mono)", ...defaultTheme.fontFamily.mono],
            },
            colors: {
                cream: {
                    900: "#F8EEDD",
                    800: "#F5EAD6",
                },
                primary: {
                    900: "#EF2E52",
                    800: "#FF5271",
                },
                slate: {
                    900: "#181818",
                    800: "#2E2E2E",
                },
            },
        },
    },
    plugins: [],
};
export default config;
