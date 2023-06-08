/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#3FA7D6",
				secondary: "#e60d4c",
			},
			gridTemplateColumns: {
				fluid: "repeat(auto-fit, minmax(15rem, 1fr))",
			},
		},
	},
	plugins: [],
};
