const loaders = require('./loaders');
const plugins = require('./plugins');
const optimization = require('./optimization');
const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin');

const proyecto = plugins.proyecto;

const config = require('./../src/' + proyecto + '/config/config');
const templates = require('./../src/' + proyecto + '/config/templates.json');

const webpack = {
    context: path.resolve(__dirname, './../src/' + proyecto),
    entry: config.entry,
    module: {
        rules: [
            loaders.JSLoader,
            loaders.CSSLoader,
            loaders.Pugloader,
            loaders.IMGLoader
        ]
    },
    node: {
        fs: "empty"
    },
    plugins: (function() {
        var pl = [];
        templates.filter((e) => {
            pl.push(
                new HtmlWebPackPlugin({
                    template: 'templates/' + e.template,
                    filename: e.filename,
                    inject: e.inject,
                    title: e.title
                })
            );
        })
        pl.push(
            plugins.MiniCssExtractPlugin,
            plugins.CompressionPlugin,
            plugins.ProvidePlugin,
            plugins.FriendlyErrorsWebpackPlugin,
            plugins.DuplicatePackageCheckerPlugin
        );

        config.options.BundleAnalyzerPlugin ? pl.push(plugins.BundleAnalyzerPlugin) : false;
        config.options.ga ? pl.push(plugins.ga) : false;
        config.options.yandex ? pl.push(plugins.yandex) : false;

        return pl;
    }()),
    output: config.output
}

module.exports = (env, argv) => {
    if (argv.mode === 'development') {
        webpack.devServer = {
            quiet: true,
        };
        webpack.devtool = 'source-map';
    }

    if (argv.mode === 'production') {
        webpack.optimization = optimization.optimization;
    }
    return webpack;
};