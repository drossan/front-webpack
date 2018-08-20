const plugins = require('./plugins');

const optimization = {
    minimizer: [
        plugins.UglifyJsPlugin,
        plugins.OptimizeCssAssetsPlugin
    ],
    splitChunks: {
        chunks: 'async',
        minSize: 30000,
        maxSize: 0,
        cacheGroups: {
            default: false,
            commons: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendor',
                chunks: 'all',
            },
        },
    },
};

module.exports = {
    optimization: optimization
};