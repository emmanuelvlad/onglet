module.exports = {
	purge: {
		// Specify the paths to all of the template files in your project
		content: ["src/**/*.vue"],

		// Whitelist selectors by using regular expression
		whitelistPatterns: [
			/-(leave|enter|appear)(|-(to|from|active))$/, // transitions
			/data-v-.*/, // scoped css
		],
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			black: "#000000",
			dark: "#282a36",
			white: "#f8f8f2",
			current: "#44475a",
			comment: "#6272a4",
			cyan: "#8be9fd",
			green: "#50fa7b",
			orange: "#ffb86c",
			pink: "#ff79c6",
			purple: "#bd93f9",
			red: "#ff5555",
			yellow: "#f1fa8c",
		},
		extend: {},
		fontFamily: {
			body: ["Roboto"],
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
