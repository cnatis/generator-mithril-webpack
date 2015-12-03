'use strict';
var yeoman = require('yeoman-generator');
var _ = require('lodash');

module.exports = yeoman.generators.Base.extend({
	constructor: function() {
		yeoman.generators.Base.apply(this, arguments);

		// Arguments
		this.argument('modelName', {
			desc: 'New Mithril model name',
			type: String, 
			optional: false,
			required: true
		});
		
		// Options
		this.option('baseUrl');
	},
	prompting: function() {
		var done = this.async();

		// Have Yeoman greet the user.
		this.log('Welcome to the awe-inspiring Mithril generator!');

		// Prompt for user input
		var prompts = [];

		this.prompt(prompts, function(props) {
			this.props = props;
			// To access props later use this.props.someOption;

			done();
		}.bind(this));
	},

	writing: {
		app: function() {
			this.modelName = _.camelCase(this.modelName);

			// Copy the model file to the project
			this.fs.copyTpl(
				this.templatePath('model.js'),
				this.destinationPath('src/models/' + this.modelName + '.js'),
				{ url: this.options.baseUrl || '' }
			);
		}
	}
});