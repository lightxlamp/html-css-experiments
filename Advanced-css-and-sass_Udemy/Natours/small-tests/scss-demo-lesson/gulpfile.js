'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 
gulp.task('scss', function () {
  return gulp.src('scss/**/*.scss').pipe(sass()).pipe(gulp.dest('css'));
});
