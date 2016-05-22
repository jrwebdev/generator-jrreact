'use strict';

let webpackConfig = require('./webpack.config');

module.exports = (config) => {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'spec.js'
        ],
        exclude: [
        ],
        preprocessors: {
            'spec.js': ['webpack', 'sourcemap']
        },
        browsers: ['Chrome'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        singleRun: (process.env.NODE_ENV === 'test'),
        concurrency: Infinity,
        webpack: {
            devtool: 'inline-source-map',
            module: webpackConfig.module,
            postcss: webpackConfig.postcss,
            resolve: {
                extensions: ['', '.js', '.json']
            },
            externals: {
                'jsdom': 'window',
                'react/lib/ExecutionEnvironment': true,
                'react/lib/ReactContext': true,
                'react/addons': true
            }
        },
        webpackMiddleware: {
            noInfo: true
        },
        reporters: ['logcapture', 'super-dots', 'mocha'],
        mochaReporter: {
            output: 'minimal'
        },
        superDotsReporter: {
            color: {
                ignore: 'grey'
            }
        }
    })
};