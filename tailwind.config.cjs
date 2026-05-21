const defaultTheme = require("tailwindcss/defaultTheme");
const nordPlugin = require("tailwind-nord");

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: ["./src/**/*.{js,ts,tsx,jsx,astro}"],
	safelist: [
		{
			pattern: /^(bg|text|border)-nord\d+(\/\d+)?$/,
			variants: ["dark", "hover", "dark:hover", "focus-within"],
		},
		{
			pattern: /^ring-nord\d+$/,
		},
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Nunito", ...defaultTheme.fontFamily.sans],
				mono: ["JetBrains Mono", ...defaultTheme.fontFamily.mono],
			},
		},
		screens: {
			phone: "480px",
			tablet: "640px",
			laptop: "1024px",
			desktop: "1280px",
		},
	},
	variants: {
		extend: {
			visibility: ["group-hover"],
		},
	},
	plugins: [nordPlugin],
};
