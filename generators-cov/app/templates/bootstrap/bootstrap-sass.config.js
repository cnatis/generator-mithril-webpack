var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	verbose: false, // Set to true to show diagnostic information

	// Use preBootstrapCustomizations to change $brand-primary. Ensure this preBootstrapCustomizations does not
	// depend on other bootstrap variables.
	preBootstrapCustomizations: "./src/style/_pre-bootstrap-customizations.scss",

	// Use bootstrapCustomizations to utilize other sass variables defined in preBootstrapCustomizations or the
	// _variables.scss file. This is useful to set one customization value based on another value.
	bootstrapCustomizations: "./src/style/_bootstrap-customizations.scss",
	mainSass: "./src/style/index.scss",

	styleLoader: ExtractTextPlugin.extract("style-loader", "css!sass"),

	// ### Scripts
	// Any scripts here set to false will never
	// make it to the client, it's not packaged
	// by webpack.
	scripts: {
		'transition': true,
		'alert': true,
		'button': true,
		'carousel': true,
		'collapse': true,
		'dropdown': true,
		'modal': true,
		'tooltip': true,
		'popover': true,
		'scrollspy': true,
		'tab': true,
		'affix': true
	},
	// ### Styles
	// Enable or disable certain less components and thus remove
	// the css for them from the build.
	styles: {
		"mixins": true,

		"normalize": true,
		"print": true,
		"glyphicons": true,

		"scaffolding": true,
		"type": true,
		"code": true,
		"grid": true,
		"tables": true,
		"forms": true,
		"buttons": true,

		"component-animations": true,
		"dropdowns": true,
		"button-groups": true,
		"input-groups": true,
		"navs": true,
		"navbar": true,
		"breadcrumbs": true,
		"pagination": true,
		"pager": true,
		"labels": true,
		"badges": true,
		"jumbotron": true,
		"thumbnails": true,
		"alerts": true,
		"progress-bars": true,
		"media": true,
		"list-group": true,
		"panels": true,
		"wells": true,
		"responsive-embed": true,
		"close": true,

		"modals": true,
		"tooltip": true,
		"popovers": true,
		"carousel": true,

		"utilities": true,
		"responsive-utilities": true
	}
};