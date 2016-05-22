'use strict';

const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let config = {
    context: __dirname + '/src',
    entry: './app.js',
    output: {
        path: __dirname + '/src',
        filename: 'app-bundle.js'
    },
    devtool: 'eval-source-map',
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'react-hot',
            exclude: /node_modules/
        },{
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
            }
        },{
            test: /\.css$/,
            loader: 'style!css?sourceMap!postcss'
        },{
            test: /\.scss$/,
            loader: 'style!css?sourceMap!postcss!sass?sourceMap'
        }]
    },
    postcss: function () {
        return [autoprefixer];
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        port: 8080
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: '<%= appname %>',
            template: 'index.template.html',
            hash: true
        })
    ]
};

if (process.env.NODE_ENV === 'production') {
    config.output.path = __dirname + '/dist';
    config.devtool = 'source-map';
    config.devServer = null;
    config.plugins.push(new webpack.DefinePlugin({
        'process.env': {'NODE_ENV': JSON.stringify('production')}
    }));
}

module.exports = config;