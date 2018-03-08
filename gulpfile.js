var gulp = require('gulp');
var sass = require('gulp-sass');
var path = require('path');

gulp.task('scss', function (){
    gulp.src(path.join('.', 'assets', 'scss', 'style.scss'))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(path.join('.', 'dist', 'css')));
});

gulp.task('images', function () {
    gulp.src(path.join('.', 'assets', 'images', '**'))
        .pipe(gulp.dest(path.join('.', 'dist', 'images')));
});

gulp.task('scss:watch', function (){
    gulp.watch(path.join('.', 'assets', 'scss', '**', '*.scss'), ['scss'])
});

gulp.task('default', ['images', 'scss', 'scss:watch'])
