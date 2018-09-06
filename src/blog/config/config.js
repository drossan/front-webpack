const path = require('path');

// Punto de entrada
const entry = {
    build: './index.js',
}

// Punto de salida
const output = {
    path: path.resolve(__dirname, './../../../dist'),
    filename: 'assets/js/[name].[contenthash].min.js'
};

// Id de GA
const ga_property_id = 'UA-XXXXXXXX-0';

// Id de YANDEX
const yandex_property_id = 'UA-XXXXXXXX-0';

// Opciones
const options = {
    BundleAnalyzerPlugin: false,
    ga: false,
    yandex: false
}

module.exports = {
    entry: entry,
    output: output,
    ga_property_id: ga_property_id,
    yandex_property_id: yandex_property_id,
    options: options
};