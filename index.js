//manifest loader for replacing rev'd sources
var loaderUtils = require('loader-utils');
var path = require('path');
var mime = require('mime');
var gutil = require('gulp-util');

module.exports = function(content) {

    this.cacheable && this.cacheable();
    var callback = this.async();

    var options = loaderUtils.parseQuery(this.query);
    var manifest = require(path.join(options.outputDir, options.manifest));
    var relativeSplit = options.relativeSplit || '/';
    var fileName = this.resourcePath.split(relativeSplit).slice(-1) || '';
    var prefix = options.prefix || '';
    var result = manifest[fileName] ? prefix + '/' + manifest[fileName] : '';

    var limit = 0;
    if (options.limit) {
        limit = parseInt(options.limit, 10);
    }

    var mimetype = options.mimetype || options.minetype || mime.lookup(this.resourcePath);

    if (limit <= 0 || content.length < limit) {
        if (options.debug) {
            gutil.log('manifest loader:', gutil.colors.gray(fileName), '>', gutil.colors.green('to base64'));
        }
        callback(null, "module.exports = " + JSON.stringify("data:" + (mimetype ? mimetype + ";" : "") + "base64," + content.toString("base64")));
    } else {
        if (options.debug) {
            gutil.log('manifest loader:', gutil.colors.gray(fileName), '>', gutil.colors.green(result));
        }
        callback(null, 'module.exports = "' + result + '"');
    }


};

module.exports.raw = true;
