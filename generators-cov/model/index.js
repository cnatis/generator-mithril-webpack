
// instrument by jscoverage, do not modifly this file
(function (file, lines, conds, source) {
  var BASE;
  if (typeof global === 'object') {
    BASE = global;
  } else if (typeof window === 'object') {
    BASE = window;
  } else {
    throw new Error('[jscoverage] unknow ENV!');
  }
  if (BASE._$jscoverage) {
    BASE._$jscmd(file, 'init', lines, conds, source);
    return;
  }
  var cov = {};
  /**
   * jsc(file, 'init', lines, condtions)
   * jsc(file, 'line', lineNum)
   * jsc(file, 'cond', lineNum, expr, start, offset)
   */
  function jscmd(file, type, line, express, start, offset) {
    var storage;
    switch (type) {
      case 'init':
        if(cov[file]){
          storage = cov[file];
        } else {
          storage = [];
          for (var i = 0; i < line.length; i ++) {
            storage[line[i]] = 0;
          }
          var condition = express;
          var source = start;
          storage.condition = condition;
          storage.source = source;
        }
        cov[file] = storage;
        break;
      case 'line':
        storage = cov[file];
        storage[line] ++;
        break;
      case 'cond':
        storage = cov[file];
        storage.condition[line] ++;
        return express;
    }
  }

  BASE._$jscoverage = cov;
  BASE._$jscmd = jscmd;
  jscmd(file, 'init', lines, conds, source);
})('C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/model/index.js', [1,2,3,4,5,7,9,12,20,23,26,31,33,34,37,43,46], {"49_11_20":0}, ["'use strict';","var yeoman = require('yeoman-generator');","var chalk = require('chalk');","var yosay = require('yosay');","var _ = require('lodash');","","module.exports = yeoman.generators.Base.extend({","\tconstructor: function() {","\t\tyeoman.generators.Base.apply(this, arguments);","","\t\t// Arguments","\t\tthis.argument('modelName', {","\t\t\tdesc: 'New Mithril model name',","\t\t\ttype: String, ","\t\t\toptional: false,","\t\t\trequired: true","\t\t});","\t\t","\t\t// Options","\t\tthis.option('baseUrl');","\t},","\tprompting: function() {","\t\tvar done = this.async();","","\t\t// Have Yeoman greet the user.","\t\tthis.log(yosay(","\t\t\t'Welcome to the awe-inspiring ' + chalk.red('Mithril') + ' generator!'","\t\t));","","\t\t// Prompt for user input","\t\tvar prompts = [];","","\t\tthis.prompt(prompts, function(props) {","\t\t\tthis.props = props;","\t\t\t// To access props later use this.props.someOption;","","\t\t\tdone();","\t\t}.bind(this));","\t},","","\twriting: {","\t\tapp: function() {","\t\t\tthis.modelName = _.camelCase(this.modelName);","","\t\t\t// Copy the model file to the project","\t\t\tthis.fs.copyTpl(","\t\t\t\tthis.templatePath('model.js'),","\t\t\t\tthis.destinationPath('src/models/' + this.modelName + '.js'),","\t\t\t\t{ url: this.options.baseUrl || '' }","\t\t\t);","","\t\t\t// // Get the source code for the model index file so we can create an AST","\t\t\t// var srcCode = this.fs.read(this.destinationPath('src/models/index.js'));","\t\t\t","\t\t\t// // Parse the source code into an AST","\t\t\t// var srcAst = esprima.parse(srcCode, {","\t\t\t// \tsourceType: 'module'","\t\t\t// });","","\t\t\t// // Add our import declaration to the model index","\t\t\t// srcAst.body.unshift(","\t\t\t// \tesprima.parse('import ' + this.modelName + \" from './\" + this.modelName + \"'\", {","\t\t\t// \t\tsourceType: 'module'","\t\t\t// \t})","\t\t\t// );","","\t  //       // Find the export declaration","\t  //       var exportDeclaration = srcAst.body.filter(function(treeItem) {","\t  //       \treturn (treeItem.type == 'ExportDefaultDeclaration');","\t  //       }).pop();","\t  //       // If we found one then lets add our new model to the exported object","\t  //       if(exportDeclaration) {","\t  //       \texportDeclaration.declaration.properties.push({","\t  //       \t\t\"type\": \"Property\",","   //                  \"key\": {","   //                      \"type\": \"Identifier\",","   //                      \"name\": this.modelName","   //                  },","   //                  \"value\": {","   //                      \"type\": \"Identifier\",","   //                      \"value\": this.modelName,","   //                      // This is a hack to stop escodegen from outputting undefined","   //                      'x-verbatim-property': this.modelName","   //                  },","   //                  \"kind\": \"init\"","\t  //       \t});","\t  //       }","\t        ","\t\t\t// // Generate the end result","\t\t\t// var resultCode = escodegen.generate(srcAst, {","\t\t\t// \t// This is a hack to stop escodegen from outputting undefined","\t\t\t// \tverbatim: 'x-verbatim-property'","\t\t\t// });","","\t\t\t// // Write out the new contents to the file system","\t\t\t// this.fs.write(this.destinationPath('src/models/index.js'), resultCode);","\t\t}","\t}","});"]);
_$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/model/index.js", "line", 1);

"use strict";

_$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/model/index.js", "line", 2);

var yeoman = require("yeoman-generator");

_$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/model/index.js", "line", 3);

var chalk = require("chalk");

_$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/model/index.js", "line", 4);

var yosay = require("yosay");

_$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/model/index.js", "line", 5);

var _ = require("lodash");

_$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/model/index.js", "line", 7);

module.exports = yeoman.generators.Base.extend({
    constructor: function() {
        _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/model/index.js", "line", 9);
        yeoman.generators.Base.apply(this, arguments);
        _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/model/index.js", "line", 12);
        // Arguments
        this.argument("modelName", {
            desc: "New Mithril model name",
            type: String,
            optional: false,
            required: true
        });
        _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/model/index.js", "line", 20);
        // Options
        this.option("baseUrl");
    },
    prompting: function() {
        _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/model/index.js", "line", 23);
        var done = this.async();
        _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/model/index.js", "line", 26);
        // Have Yeoman greet the user.
        this.log(yosay("Welcome to the awe-inspiring " + chalk.red("Mithril") + " generator!"));
        _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/model/index.js", "line", 31);
        // Prompt for user input
        var prompts = [];
        _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/model/index.js", "line", 33);
        this.prompt(prompts, function(props) {
            _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/model/index.js", "line", 34);
            this.props = props;
            _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/model/index.js", "line", 37);
            // To access props later use this.props.someOption;
            done();
        }.bind(this));
    },
    writing: {
        app: function() {
            _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/model/index.js", "line", 43);
            this.modelName = _.camelCase(this.modelName);
            _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/model/index.js", "line", 46);
            // Copy the model file to the project
            this.fs.copyTpl(this.templatePath("model.js"), this.destinationPath("src/models/" + this.modelName + ".js"), {
                url: _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/model/index.js", "cond", "49_11_20", this.options.baseUrl) || ""
            });
        }
    }
});