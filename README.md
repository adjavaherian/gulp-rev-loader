#Gulp Rev Loader
This webpack loader is designed to work in tandem with gulp-rev.  
For example, you might have a build process that uses gulp and [gulp-rev](https://github.com/sindresorhus/gulp-rev) to tag hashes on your rev'd images or files. Gulp-rev creates a manifest of the processed files.  Using gulp-rev-loader checks your files against the rev-manifest and re-writes them to their rev'd paths at webpack compile time.  You can also update path prefixes and hash out the file content based on file size.

##Install
`npm install gulp-rev-loader`
 
##Configure a gulp-rev task
```javascript
//gulpfile.js
var gulp = require('gulp');
var rev = require('gulp-rev');

gulp.task('default', function() {
 return gulp.src('images/**/*.+(jpg|jpeg|ico|png|gif|svg)')
     .pipe(rev())
     .pipe(gulp.dest('dist/images'))
     .pipe(rev.manifest())
     .pipe(gulp.dest('dist'));
});
```

##Configure the webpack loader
```javascript
//webpack.config.js
var webpack = require('webpack');
var path = require('path');

module.exports = {
    name: 'example',
    entry: {
        index: path.join(__dirname, 'app.js')
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
                loader: 'gulp-rev-loader',
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
        ]
    },
};

//optionally, use string of url params as options
//var manifestParams = '?debug=false&limit=5000&hash=sha512&digest=hex&relativeSplit=images/&prefix=images&manifest=rev-manifest&outputDir=' + path.join(__dirname, 'dist');
```

##Options
```javascript
    debug: true, //bool to output logging info
    limit: 5000, //int to limit min k before hashing file src
    hash: 'sha512', //string hash type
    digest: 'hex', //string digest type
    relativeSplit: 'images/', //string to relative split point
    prefix: 'images', //string to prefix manifest replacements
    manifest: 'rev-manifest', //string path to manifest
    outputDir: path.join(__dirname, 'dist') //string path to output directory
```

##Running the example
`cd gulp-rev-loader/examples && gulp`

##Testing
`npm install -g mocha && npm test`