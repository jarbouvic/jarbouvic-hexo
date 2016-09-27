var gulp        = require("gulp");

gulp.task('serve', ['hugo:all'], function() {
    gulp.watch(['src/styles/*.scss', 'src/scripts/*.js', 'src/img/*.*', 'src/svg/*.svg'], ['build:all']);
});
