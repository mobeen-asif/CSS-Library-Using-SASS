const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss');

function buildStyles() {
  return gulp
    .src('src/sass/**/*.scss')  
    .pipe(sass().on('error', sass.logError))
    .pipe(purgecss({
      content: ['*.html'],
    }))
    .pipe(gulp.dest('dist/css'));
}

function watchTask() {
  gulp.watch(['src/sass/**/*.scss', '*.html'], buildStyles); 
}

exports.default = gulp.series(buildStyles, watchTask);
