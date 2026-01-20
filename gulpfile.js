const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return gulp
    .src('src/sass/**/*.scss')  
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
}

function watchTask() {
  gulp.watch('src/sass/**/*.scss', buildStyles); 
}

exports.default = gulp.series(buildStyles, watchTask);
