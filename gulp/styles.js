var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cleancss = require('gulp-clean-css');

gulp.task('styles', function() {
    return gulp.src('hugo/themes/perso/src/scss/*.scss')
        .pipe(sass())
        .pipe(autoprefixer('last 2 versions'))
        .pipe(cleancss({advanced:false}))
        .pipe(gulp.dest('hugo/themes/perso/static/css'));
});
