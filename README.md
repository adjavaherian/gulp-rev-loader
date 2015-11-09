#Gulp Rev Loader

This webpack loader is designed to work in tandem with gulp-rev.  
For example, you might have a build process that uses gulp and gulp-rev to tag hashes on your rev'd images or files.
Gulp-rev creates a manifest of the processed files.  Using gulp-rev-loader checks your files against the rev-manifest
and re-writes them to their rev'd paths at webpack compile time.  You can also update path prefixes and hash out the 
file content based on file size.
 
 ```javascript
 npm install gulp-rev-loader
 ```
 
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
var manifestParams = '?debug=false&limit=5000&hash=sha512&digest=hex&relativeSplit=images/&prefix=images&manifest=rev-manifest&outputDir=' + path.join(__dirname, 'dist');

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
                loaders: [
                    'manifest-loader'
                ]
            }
        ],
        noParse: []
    },
};
```

#Running the example

```sh
cd gulp-rev-loader/examples && gulp
```