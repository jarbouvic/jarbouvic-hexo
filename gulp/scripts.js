var gulp = require('gulp');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');

gulp.task('scripts', function() {
    return gulp.src('hugo/themes/perso/src/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter("default"))   
        .pipe(uglify())
        .pipe(gulp.dest('hugo/themes/perso/static/js'));
});
