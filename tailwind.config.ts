import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		container: {
			center: true,
			padding: "2rem",
		},
		extend: {
			colors: {
				primary: '#008A09',
				secondary: '#C4D9C8',
				soil: '#D57922',
				danger: '#F2383A',
				gray: '#273240',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
