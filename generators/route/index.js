'use strict';
var yeoman = require('yeoman-generator');
var _ = require('lodash');
var astQuery = require('ast-query');
var util = require('../../utilities/util');

module.exports = yeoman.generators.Base.extend({
	constructor: function() {
		yeoman.generators.Base.apply(this, arguments);

		// Arguments
		this.argument('newRoute', {
			desc: 'New route path ie. "/profile/new"',
			type: String, 
			optional: false,
			required: true
		});

		// Options
		this.option('default', {
			desc: 'Set this route as the "default" route at url "/"',
			alias: 'd',
			type: Boolean,
			defaults: false
		});
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
			// Hook is the comment we use to find out insert point
			var hook = '/*===== yeoman hook =====*/';
			// Remove preceding and trailing slashes
			this.newRoute = this.newRoute.replace(/^\/|\/$/g, '');
			var finalRoute = '/' + (this.options.default ? '' : this.newRoute);
			// Split the route path so we can camel case it for use in the file system
			var routeArray = this.newRoute.split('/');
			var ccRoutePath = routeArray.reduce(function(result, current, idx) {
				if(idx > 0) {
					return result + '/' + _.camelCase(current);
				} else {
					return _.camelCase(current);
				}
			}, '');

			// Copy the view template to the project
			this.fs.copy(
				this.templatePath('module/**/*'),
				this.destinationPath('src/modules/' + ccRoutePath)
			);

			// Get out insert code ready to be inserted into the project
			var sourcePath = this.destinationPath('src/index.js');
			// Tree is an instance of ast-query
			var tree = astQuery(this.fs.read(sourcePath));
			var routes = tree.var('routes');
			routes.nodes[0].init.properties.push({
                type: 'Property',
                key: {
                    type: 'Literal',
                    value: finalRoute
                },
               	value: {
                    type: 'ObjectExpression',
                    properties: [
                        {
                            type: 'Property',
                            key: {
                                'type': 'Identifier',
                                'name': 'controller'
                            },
                            value: {
                                type: 'FunctionExpression',
                                id: null,
                                params: [],
                                defaults: [],
                                body: {
                                    type: 'BlockStatement',
                                    body: [
                                        {
                                            type: 'ExpressionStatement',
                                            expression: {
                                                type: 'CallExpression',
                                                callee: {
                                                    type: 'MemberExpression',
                                                    object: {
                                                        type: 'Identifier',
                                                        name: 'require'
                                                    },
                                                    'property': {
                                                        'type': 'Identifier',
                                                        'name': 'ensure'
                                                    }
                                                },
                                                arguments: [
                                                    {
                                                        type: 'ArrayExpression',
                                                        elements: []
                                                    },
                                                    {
                                                        type: 'ArrowFunctionExpression',
                                                        id: null,
                                                        params: [],
                                                        defaults: [],
                                                        body: {
                                                            type: 'BlockStatement',
                                                            body: [
                                                                {
                                                                    type: 'ExpressionStatement',
                                                                    expression: {
                                                                        type: 'AssignmentExpression',
                                                                        operator: '=',
                                                                        left: {
                                                                            type: 'MemberExpression',
                                                                            computed: true,
                                                                            object: {
                                                                                type: 'Identifier',
                                                                                name: 'routes'
                                                                            },
                                                                            property: {
                                                                                type: 'Literal',
                                                                                value: finalRoute
                                                                            }
                                                                        },
                                                                        right: {
                                                                            type: 'CallExpression',
                                                                            callee: {
                                                                                type: 'Identifier',
                                                                                name: 'require'
                                                                            },
                                                                            arguments: [
                                                                                {
                                                                                    type: 'Literal',
                                                                                    value: './modules/' + ccRoutePath
                                                                                }
                                                                            ]
                                                                        }
                                                                    }
                                                                },
                                                                {
                                                                    type: 'ExpressionStatement',
                                                                    expression: {
                                                                        type: 'CallExpression',
                                                                        callee: {
                                                                            type: 'MemberExpression',
                                                                            object: {
                                                                                type: 'Identifier',
                                                                                name: 'm'
                                                                            },
                                                                            property: {
                                                                                type: 'Identifier',
                                                                                name: 'route'
                                                                            }
                                                                        },
                                                                        arguments: [
                                                                            {
                                                                                type: 'CallExpression',
                                                                                callee: {
                                                                                    type: 'MemberExpression',
                                                                                    computed: false,
                                                                                    object: {
                                                                                        type: 'Identifier',
                                                                                        name: 'm'
                                                                                    },
                                                                                    property: {
                                                                                        type: 'Identifier',
                                                                                        name: 'route'
                                                                                    }
                                                                                },
                                                                                arguments: []
                                                                            }
                                                                        ]
                                                                    }
                                                                },
                                                                {
                                                                    type: 'ExpressionStatement',
                                                                    expression: {
                                                                        type: 'CallExpression',
                                                                        callee: {
                                                                            type: 'Identifier',
                                                                            name: 'lazyLoad'
                                                                        },
                                                                        arguments: []
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        generator: false,
                                                        expression: false
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                },
                                generator: false,
                                expression: false
                            },
                            kind: 'init',
                            method: false,
                            shorthand: false
                        }
                    ]
                },
                kind: 'init',
                method: false,
                shorthand: false
            });
			this.fs.write(sourcePath, tree.toString());

			// Insert our style import into the project
			var styleHook = '/*===== yeoman module hook =====*/';
		
			// Get out insert code ready to be inserted into the project
			var styleSource = this.destinationPath('src/style/index.scss');
			var styleInsert = "@import '../modules/" + ccRoutePath + "/style.scss';"

			// Write out the new contents to the file system
			util.insertStringHook.call(this, styleHook, styleSource, styleInsert, '\n');
		}
	}
});