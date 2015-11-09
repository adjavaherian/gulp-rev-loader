//webpack.js
//main webpack gulp task

var gulp = require('gulp');
var runSequence = require('run-sequence');
var webpack = require('webpack');
var path = require('path');
var gutil = require('gulp-util');
var rev = require('gulp-rev');
var devConfig = require(path.join(__dirname, 'webpack.config.js'));

function onBuild(done) {
    return function(err, stats) {
        if (err) {
            gutil.log('Error', err);
            if (done) {
                done();
            }
        } else {
            Object.keys(stats.compilation.assets).forEach(function(key) {
                gutil.log('Webpack: output ', gutil.colors.green(key));
            });
            gutil.log('Webpack: ', gutil.colors.blue('finished ', stats.compilation.name));
            if (done) {
                done();
            }
        }
    }
}

gulp.task('default', function(callback) {
    runSequence(
        'images',
        'webpack-build',
        callback);
});

//rev images
gulp.task('images', function() {
    return gulp.src('images/**/*.+(jpg|jpeg|ico|png|gif|svg)')
        .pipe(rev())
        .pipe(gulp.dest('dist/images'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('dist'));
});

//build
gulp.task('webpack-build', function(done) {
    webpack(devConfig).run(onBuild(done));
});
