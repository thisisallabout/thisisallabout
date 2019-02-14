const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
    entry: {
        vendor: ['babel-polyfill', 'whatwg-fetch'],
        index: ['./src/js/index.js']
    },
    plugins: [
        new ProgressBarPlugin({
            format: 'Build [:bar] :percent (:elapsed seconds)',
            clear: false,
        }),
        new CleanWebpackPlugin(['dist'], { watch: false }),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new MiniCssExtractPlugin({
            filename: 'styles/[name].[contenthash].css'
        }),
        new HTMLWebpackPlugin({
            template: './src/index.html',
            title: 'THISISALLABOUT',
            filename: 'index.html'
        }),
        new webpack.HashedModuleIdsPlugin()
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/",
        filename: 'scripts/[name].[chunkhash].js',
        chunkFilename: 'scripts/[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
            {
                test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
                loader: 'file-loader?name=[name].[ext]&outputPath=res/&publicPath=../'
            }
        ],
    }
}