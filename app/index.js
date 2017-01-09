'use strict';

const Generator = require('yeoman-generator');
const kebabCase = require('lodash/kebabCase');
const extend = require('lodash/extend');
const isString = require('lodash/isString');
const {execSync} = require('child_process');

module.exports = class extends Generator {

  constructor(args, opts) {
    super(args, opts);
  }

  getUserInput() {
    let prompt = this.prompt([{
      type: 'input',
      name: 'appname',
      message: 'Your project name',
      default: kebabCase(this.appname)
    },{
      type: 'input',
      name: 'description',
      message: 'A description of your project'
    }]);

    return prompt.then(res => extend(this, res));
  }

  copyFiles() {

    let files = [
      ['gitignore', '.gitignore'],
      '.babelrc',
      'README.md',
      'package.json',
      'webpack.config.js',
      'postcss.config.js',
      'browserslist',
      '.eslintrc',
      '.sass-lint.yml',
      'test/style-mock.js',
      'src/index.template.html',
      'src/app.js'
    ];

    files.map(file => {
      let inFile, outFile;

      if (isString(file)) {
        inFile = file;
        outFile = file;
      } else {
        inFile = file[0];
        outFile = file[1];
      }

      this.fs.copyTpl(
        this.templatePath(inFile),
        this.destinationPath(outFile),
        this
      )
    });

  }

  installDeps() {

    let deps = [
      'lodash',
      'react',
      'react-dom'
    ];

    let devDeps = [
      'webpack@2.2.0-rc.3',
      'webpack-dev-server@2.2.0-rc.0',
      'css-loader',
      'style-loader',
      'postcss-loader',
      'json-loader',
      'sass-loader',
      'babel-loader',
      'babel-core',
      'babel-jest',
      'babel-plugin-transform-object-rest-spread',
      'babel-plugin-transform-class-properties',
      'babel-eslint',
      'babel-preset-react',
      'html-webpack-plugin',
      'extract-text-webpack-plugin@^2.0.0-beta',
      'postcss',
      'autoprefixer',
      'node-sass',
      'enzyme',
      'react-addons-test-utils',
      'cheerio',
      'rimraf',
      'cross-env',
      'jest',
      'eslint',
      'eslint-config-airbnb',
      'eslint-plugin-import',
      'eslint-plugin-jasmine',
      'eslint-plugin-jsx-a11y',
      'eslint-plugin-react',
      'eslint-plugin-import',
      'sass-lint',
      'gh-pages'
    ];

    let isYarnInstalled = true;
    try {
      execSync('yarn --version');
    } catch (err) {
      isYarnInstalled = false;
    }

    if (isYarnInstalled) {
      this.yarnInstall(deps);
      this.yarnInstall(devDeps, {dev: true})
    } else {
      this.npmInstall(deps, {'save': true});
      this.npmInstall(devDeps, {'saveDev': true});
    }

  }

}
