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
      'webpack',
      'webpack-dev-server',
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
      'babel-preset-env',
      'babel-preset-react',
      'babel-polyfill',
      'html-webpack-plugin',
      'extract-text-webpack-plugin',
      'postcss',
      'autoprefixer',
      'node-sass',
      'enzyme',
      'react-addons-test-utils',
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
      'gh-pages',
      'prop-types',
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
