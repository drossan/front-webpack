const loaders = require('./loaders');
const plugins = require('./plugins');
const optimization = require('./optimization');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const proyecto = plugins.proyecto;

const config = require('./../src/' + proyecto + '/config/config');
const templates = require('./../src/' + proyecto + '/config/templates.json');

const webpack = {
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
                    template: e.template,
                    filename: e.filename,
                    inject: e.inject,
                    title: e.title
                })
            );
        })
        pl.push(
            plugins.MiniCssExtractPlugin,
            plugins.ga,
            plugins.yandex,
            plugins.BundleAnalyzerPlugin,
            plugins.CompressionPlugin,
            plugins.ProvidePlugin,
            plugins.FriendlyErrorsWebpackPlugin,
            plugins.DuplicatePackageCheckerPlugin
        );
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