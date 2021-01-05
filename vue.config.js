module.exports = {
	pages: {
		override: {
			template: "public/browser-extension.html",
			entry: "./src/override/main.js",
			title: "onglet",
		},
	},
	pluginOptions: {
		browserExtension: {
			componentOptions: {},
		},
	},
};
