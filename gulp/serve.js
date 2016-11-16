var gulp        = require("gulp");

gulp.task('serve', ['hugo:all'], function() {
    //gulp.watch(['hugo/themes/perso/src/*'], ['build:all']);
    gulp.watch(['hugo/themes/perso/src/scss/*'], ['styles']);
    gulp.watch(['hugo/themes/perso/src/js/*'], ['scripts']);
});
