var gulp        = require("gulp");

gulp.task('serve', ['hugo:dev'], function () {
    gulp.watch(['src/scss/*'], ['styles']);
    gulp.watch(['src/js/*'], ['scripts']);
});

gulp.task('watch', function () {
    gulp.watch(['src/scss/*'], ['styles']);
    gulp.watch(['src/js/*'], ['scripts']);
});
