const devMode = process.env.NODE_ENV !== 'production'
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const JSLoader = {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
        loader: "babel-loader"
    }
};

const Pugloader = {
    test: /.pug$/,
    use: {
        loader: 'pug-loader',
        options: {
            self: true,
        },
    }
};

const CSSLoader = {
    test: /\.(sa|sc|c)ss$/,
    use: [MiniCssExtractPlugin.loader,
        { loader: 'css-loader', options: { importLoaders: 1 } },
        { loader: 'postcss-loader' },
        { loader: 'sass-loader' }
    ]
};

const JsLoader = {
    type: 'javascript/auto',
    test: /\.json$/,
    use: ['json-loader'],
};

const IMGLoader = {
    test: /\.(jpe?g|png|gif|svg)$/i,
    use: [
        'file-loader?name=images/[name].[ext]',
        'image-webpack-loader?bypassOnDebug'
    ]
}

module.exports = {
    JSLoader: JSLoader,
    Pugloader: Pugloader,
    CSSLoader: CSSLoader,
    IMGLoader: IMGLoader
};