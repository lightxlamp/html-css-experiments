const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// compile scss into css
// gulp.task - used to be in prev. versions
// now we need to use functions

function style(){
    // 1) Where is my SCSS? 
    return gulp.src('./scss/**/*.sass')
    // 2) Pass that file through sass compiler 
        .pipe(sass())
    // 3) Where do I save decompiled css? 
        .pipe(gulp.dest('./css'))
}

exports.style = style;

