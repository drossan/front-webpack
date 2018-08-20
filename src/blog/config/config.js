const path = require('path');

const entry = {
    build: './src/blog/index.js',
}

const output = {
    path: path.resolve(__dirname, './../../../dist'),
    filename: 'assets/js/[name].min.js'
};

// Id de GA
const ga_property_id = 'UA-XXXXXXXX-0';

// Id de GA
const yandex_property_id = 'UA-XXXXXXXX-0';

module.exports = {
    entry: entry,
    output: output,
    ga_property_id: ga_property_id,
    yandex_property_id: yandex_property_id
};