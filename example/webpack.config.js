//webpack.config.js
//main webpack config
var webpack = require('webpack');
var path = require('path');
var StatsPlugin = require('stats-webpack-plugin');
//var manifestParams = '?debug=false&limit=5000&hash=sha512&digest=hex&relativeSplit=images/&prefix=images&manifest=rev-manifest&outputDir=' + path.join(__dirname, 'dist');

module.exports = {
    name: 'example',
    context: __dirname,
    node: {
        console: true
    },
    entry: {
        app: path.join(__dirname, 'app.js')
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: '[name].bundle.[hash].js'
    },
    resolve: {
        root: path.join(__dirname),
        fallback: path.join(__dirname, 'node_modules'),
        modulesDirectories: ['node_modules'],
        extensions: ['', '.json', '.js', '.jsx', '.scss', '.png', '.jpg', '.jpeg', '.gif']
    },
    module: {
        loaders: [
            {
                test: /\.json$/,
                loaders: ['json-loader']
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: path.join(__dirname, '../', 'index'),
                query: {
                    debug: true,
                    limit: 5000,
                    hash: 'sha512',
                    digest: 'hex',
                    relativeSplit: 'images/',
                    prefix: 'images',
                    manifest: 'rev-manifest',
                    outputDir: path.join(__dirname, 'dist')
                }
            }
        ],
        noParse: []
    },
    plugins: [
        new StatsPlugin(path.join('webpack-assets.json'), {
            assetsByChunkName: true,
            source: false,
            reasons: false,
            modules: false,
            chunks: false
        })
    ],
    bail: true,
    debug: true
};


