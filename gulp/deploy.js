var gulp = require('gulp');
var git = require('gulp-git');
var run = require('gulp-run');
var exec = require('child_process').exec;


gulp.task('git-add', function(cb) {
  run('git add --all .').exec('', cb)
  .pipe(gulp.dest('output'));
});

gulp.task('git-commit', ['git-add'], function(cb) {
  run('git commit -m "test"').exec('', cb)
  .pipe(gulp.dest('output'));
});

gulp.task('git-push', ['git-commit'], function(cb) {
  run('git push origin master').exec('', cb)
  .pipe(gulp.dest('output'));
});

gulp.task('deploy', ['git-push'], function() {
    process.chdir('hugo/public');
});
