
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
})('C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/component/index.js', [1,2,3,4,5,7,9,12,20,23,28,30,31,34,40,42,48,51,52], {"55_6_36":0}, ["'use strict';","var yeoman = require('yeoman-generator');","var chalk = require('chalk');","var yosay = require('yosay');","var _ = require('lodash');","","module.exports = yeoman.generators.Base.extend({","\tconstructor: function() {","\t\tyeoman.generators.Base.apply(this, arguments);","","\t\t// Arguments","\t\tthis.argument('componentName', {","\t\t\tdesc: 'New Mithril component name',","\t\t\ttype: String, ","\t\t\toptional: false,","\t\t\trequired: true","\t\t});","\t},","\tprompting: function() {","\t\tvar done = this.async();","","\t\t// Have Yeoman greet the user.","\t\tthis.log(yosay(","\t\t\t'Welcome to the awe-inspiring ' + chalk.red('Mithril') + ' generator!'","\t\t));","","\t\t// Prompt for user input","\t\tvar prompts = [];","","\t\tthis.prompt(prompts, function(props) {","\t\t\tthis.props = props;","\t\t\t// To access props later use this.props.someOption;","","\t\t\tdone();","\t\t}.bind(this));","\t},","","\twriting: {","\t\tapp: function() {","\t\t\tthis.componentName = _.camelCase(this.componentName);","\t\t\t// Copy the model file to the project","\t\t\tthis.fs.copy(","\t\t\t\tthis.templatePath('component/**/*'),","\t\t\t\tthis.destinationPath('src/components/' + this.componentName)","\t\t\t);","","\t\t\t// Insert our style import into the project","\t\t\tvar styleHook = '/*===== yeoman component hook =====*/';","\t\t","\t\t\t// Get out insert code ready to be inserted into the project","\t\t\tvar styleSource = this.fs.read(this.destinationPath('src/style/index.scss'));","\t\t\tvar styleInsert = \"@import '../components/\" + this.componentName + \"/style.scss';\"","","\t\t\t// Write out the new contents to the file system","\t\t\tif(styleSource.indexOf(styleInsert) < 0)","\t\t\t\tthis.fs.write(this.destinationPath('src/style/index.scss'), styleSource.replace(styleHook, styleHook + '\\n' + styleInsert));","\t\t}","\t}","});"]);
_$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/component/index.js", "line", 1);

"use strict";

_$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/component/index.js", "line", 2);

var yeoman = require("yeoman-generator");

_$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/component/index.js", "line", 3);

var chalk = require("chalk");

_$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/component/index.js", "line", 4);

var yosay = require("yosay");

_$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/component/index.js", "line", 5);

var _ = require("lodash");

_$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/component/index.js", "line", 7);

module.exports = yeoman.generators.Base.extend({
    constructor: function() {
        _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/component/index.js", "line", 9);
        yeoman.generators.Base.apply(this, arguments);
        _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/component/index.js", "line", 12);
        // Arguments
        this.argument("componentName", {
            desc: "New Mithril component name",
            type: String,
            optional: false,
            required: true
        });
    },
    prompting: function() {
        _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/component/index.js", "line", 20);
        var done = this.async();
        _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/component/index.js", "line", 23);
        // Have Yeoman greet the user.
        this.log(yosay("Welcome to the awe-inspiring " + chalk.red("Mithril") + " generator!"));
        _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/component/index.js", "line", 28);
        // Prompt for user input
        var prompts = [];
        _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/component/index.js", "line", 30);
        this.prompt(prompts, function(props) {
            _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/component/index.js", "line", 31);
            this.props = props;
            _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/component/index.js", "line", 34);
            // To access props later use this.props.someOption;
            done();
        }.bind(this));
    },
    writing: {
        app: function() {
            _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/component/index.js", "line", 40);
            this.componentName = _.camelCase(this.componentName);
            _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/component/index.js", "line", 42);
            // Copy the model file to the project
            this.fs.copy(this.templatePath("component/**/*"), this.destinationPath("src/components/" + this.componentName));
            _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/component/index.js", "line", 48);
            // Insert our style import into the project
            var styleHook = "/*===== yeoman component hook =====*/";
            _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/component/index.js", "line", 51);
            // Get out insert code ready to be inserted into the project
            var styleSource = this.fs.read(this.destinationPath("src/style/index.scss"));
            _$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/component/index.js", "line", 52);
            var styleInsert = "@import '../components/" + this.componentName + "/style.scss';";
            // Write out the new contents to the file system
            if (_$jscmd("C:/Users/cnatis.OCULUS/Desktop/Learn Ember/mwebpack/generators/component/index.js", "cond", "55_6_36", styleSource.indexOf(styleInsert) < 0)) this.fs.write(this.destinationPath("src/style/index.scss"), styleSource.replace(styleHook, styleHook + "\n" + styleInsert));
        }
    }
});