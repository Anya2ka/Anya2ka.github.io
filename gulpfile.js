var gulp = require('gulp');
var sass = require('gulp-sass');
var path = require('path');

gulp.task('scss', function (){
    gulp.src(path.join('.', 'assets', 'scss', 'style.scss'))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(path.join('.', 'dist', 'css')));
});

gulp.task('scss:watch', function (){
    gulp.watch(path.join('.', 'assets', 'scss', '**', '*.scss'), ['scss'])
});
