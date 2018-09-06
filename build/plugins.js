const init = require("./../config.js");
const proyecto = init.proyecto;
const config = require('./../src/' + proyecto + '/config/config');
const webpack = require("webpack");
const _MiniCssExtractPlugin = require("mini-css-extract-plugin");
const _UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const _OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const _HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');
const _BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const _WebpackDeepScopeAnalysisPlugin = require('webpack-deep-scope-plugin').default;
const _CompressionPlugin = require("compression-webpack-plugin");
const _FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const _DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");

const MiniCssExtractPlugin = new _MiniCssExtractPlugin({
    filename: 'assets/css/[name].[contenthash].min.css'
});

const UglifyJsPlugin = new _UglifyJsPlugin({
    uglifyOptions: {
        mangle: true,
    },
});

const OptimizeCssAssetsPlugin = new _OptimizeCssAssetsPlugin({
    cssProcessorOptions: {
        zindex: false,
    },
});

const BundleAnalyzerPlugin = new _BundleAnalyzerPlugin();

const WebpackDeepScopeAnalysisPlugin = new _WebpackDeepScopeAnalysisPlugin();

const CompressionPlugin = new _CompressionPlugin({
    asset: "[path].gz[query]",
    algorithm: "gzip",
    test: /\.js$|\.css$|\.html$/,
    threshold: 10240,
    minRatio: 0
});

const ProvidePlugin = new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery"
});

const FriendlyErrorsWebpackPlugin = new _FriendlyErrorsWebpackPlugin();

const DuplicatePackageCheckerPlugin = new _DuplicatePackageCheckerPlugin();


const ga = new _HtmlWebpackPartialsPlugin({
    path: 'src/_common/inc/analytics.html',
    location: 'head',
    priority: 'high',
    options: {
        ga_property_id: config.ga_property_id
    }
});

const yandex = new _HtmlWebpackPartialsPlugin({
    path: 'src/_common/inc/yandex.html',
    location: 'head',
    priority: 'high',
    options: {
        yandex_property_id: config.yandex_property_id
    }
});


module.exports = {
    proyecto: proyecto,
    MiniCssExtractPlugin: MiniCssExtractPlugin,
    UglifyJsPlugin: UglifyJsPlugin,
    OptimizeCssAssetsPlugin: OptimizeCssAssetsPlugin,
    BundleAnalyzerPlugin: BundleAnalyzerPlugin,
    WebpackDeepScopeAnalysisPlugin: WebpackDeepScopeAnalysisPlugin,
    CompressionPlugin: CompressionPlugin,
    ProvidePlugin: ProvidePlugin,
    FriendlyErrorsWebpackPlugin: FriendlyErrorsWebpackPlugin,
    DuplicatePackageCheckerPlugin: DuplicatePackageCheckerPlugin,
    ga: ga,
    yandex: yandex
};