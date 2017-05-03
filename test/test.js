'use strict';
var path = require('path');
var assert = require('assert');
var webpack = require('webpack');
var fs = require('fs');

var testConfig = {
    entry: path.join(__dirname, 'app.test.js'),
    resolve: {
        extensions: ['.json', '.jpg']
    },
    output: {
        filename: path.join('./test', 'bundle.js'),
        libraryTarget: 'commonjs2'
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
                    manifest: 'test.manifest.json',
                    outputDir: __dirname
                }
            }
        ]
    }
};


it('should export reved files as is', function (cb) {

    webpack(testConfig, function onCompilationFinished(err, stats) {

        if (err) {
            return cb(err);
        }
        if (stats.hasErrors()) {
            return cb(stats.compilation.errors[0]);
        }
        if (stats.hasWarnings()) {
            return cb(stats.compilation.warnings[0]);
        }

        fs.readFile(path.join(__dirname, 'bundle.js'), function (err, data) {
            if (err) throw err;
            assert(data.indexOf('images/doge-d9409101bb.jpg') > 0);
            cb();
        });

    });

});
