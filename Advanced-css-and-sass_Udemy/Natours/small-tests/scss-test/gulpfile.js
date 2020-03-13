const {src, dest} = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');

exports.build = function() {
    return src('./app/scss/test.scss').pipe(sass().on('error', sass.logError)).pipe(dest('./app/css/'));
};

exports.rename = function(cb) {
    return src('app/scss/test.scss').pipe(rename('renamed.scss')).pipe(dest('app/'));
};
