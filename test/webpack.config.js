const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HeaderInjectionWebpackPlugin = require('../index');

module.exports = {
    mode: 'none',
    entry: './src/index.js',
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss', 'css']
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new CopyWebpackPlugin([{
            from: './assets',
        }]),
        new HtmlWebpackPlugin({
            inject: true,
            template: './assets/index.html',
        }),
        new HeaderInjectionWebpackPlugin({
            package: '../package.json',
            extensions: ['.html', '.css', '.js'],
            header: '',
        }),
    ],
    devServer: {
        contentBase: './dist',
        historyApiFallback: true
    }
};