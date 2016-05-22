'use strict';

const generators = require('yeoman-generator');
const kebabCase = require('lodash/kebabCase');
const extend = require('lodash/extend');
const isString = require('lodash/isString');

module.exports = generators.Base.extend({

    constructor: function() {
        generators.Base.apply(this, arguments);
    },

    getUserInput () {
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

        // TODO: Redux
        // TODO: Routing
        // TODO: CI
        // TODO: Code Coverage

        return prompt.then(res => extend(this, res));
    },

    copyFiles () {

        let files = [
            ['gitignore', '.gitignore'],
            'README.md',
            'package.json',
            'webpack.config.js',
            'karma.conf.js',
            'spec.js',
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
    },

    installDeps () {

        let deps = [
            'lodash',
            'react',
            'react-dom'
        ];

        let devDeps = [
            'webpack',
            'webpack-dev-server',
            'babel',
            'babel-core',
            'babel-loader',
            'babel-preset-es2015',
            'babel-plugin-transform-object-rest-spread',
            'css-loader',
            'style-loader',
            'html-webpack-plugin',
            'postcss',
            'autoprefixer',
            'postcss-loader',
            'node-sass',
            'sass-loader',
            'babel-preset-react',
            'react-hot-loader',
            'json-loader',
            'enzyme',
            'react-addons-test-utils',
            'cheerio',
            'rimraf',
            'cross-env',
            'jasmine-core',
            'karma',
            'karma-chrome-launcher',
            'karma-jasmine',
            'karma-sourcemap-loader',
            'karma-super-dots-reporter',
            'karma-webpack',
            'karma-logcapture-reporter',
            'karma-mocha-reporter'
        ];

        this.npmInstall(deps, {'save': true});
        this.npmInstall(devDeps, {'saveDev': true});
    }

});