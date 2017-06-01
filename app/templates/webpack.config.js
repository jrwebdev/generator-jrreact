const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const config = {
  context: path.join(__dirname, 'src'),
  entry: './app.js',
  output: {
    path: path.join(__dirname, 'src'),
    filename: 'app-bundle.js'
  },
  devtool: 'cheap-module-source-map',
  resolve: {
    alias: {
      react$: path.resolve('./node_modules/react')
    }
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    }, {
      test: /\.json$/,
      use: 'json-loader'
    }]
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    port: 8080,
    stats: {
      hash: false,
      version: false,
      timings: true,
      assets: true,
      chunks: false,
      modules: false,
      reasons: false,
      children: false,
      source: false,
      errors: true,
      errorDetails: true,
      warnings: true,
      publicPath: false
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: '<%= appname %>',
      template: 'index.template.html',
      hash: true
    }),
    new ExtractTextPlugin('styles.css')
  ],
  performance: {
    hints: false
  }
};

if (process.env.NODE_ENV === 'production') {

  config.performance.hints = 'warning';

  config.module.rules.push({
    test: /\.css$/,
    loader: ExtractTextPlugin.extract({
      loader: 'css-loader!postcss-loader'
    })
  }, {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract({
      loader: 'css-loader!sass-loader!postcss-loader'
    })
  });

  config.output.path = path.join(__dirname, 'dist');
  config.devtool = false;
  delete config.devServer;
  config.plugins.push(new webpack.DefinePlugin({
    'process.env': {NODE_ENV: JSON.stringify('production')}
  }));

} else {

  config.module.rules.push({
    test: /\.css$/,
    use: ['style-loader', 'css-loader', 'postcss-loader']
  }, {
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
  });

}

module.exports = config;
