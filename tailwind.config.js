// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export const content = [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
    extend: {
        fontFamily: {
            mono: ["var(--font-fira-code)"], 
        },
    },
};
export const plugins = [];
