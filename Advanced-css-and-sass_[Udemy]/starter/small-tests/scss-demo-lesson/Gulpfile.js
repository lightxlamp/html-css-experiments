var gulp = require('gulp');
var sass = require('gulp-sass');

//compile gulp.task(‘sass’, function () { gulp.src(‘app/scss/app.scss’) .pipe(sass().on(‘error’, sass.logError)) .pipe(gulp.dest(‘app/css’)); });

gulp.task('styles', function() {
    return gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

//Watch task
gulp.task('default',function() {
    return gulp.watch('sass/**/*.scss',['styles']);
});