var gulp = require('gulp');
var run = require('gulp-run');
var gutil = require('gulp-util');
var exec = require('child_process').exec;

gulp.task('git-push', function(cb) {
    var msg= "test";
    exec('git add --all . & git commit -m ' + msg + ' & git push origin master', function(err, stdout, stderr) {
        gutil.log(stdout);
        gutil.log(stderr);
        cb(err);
    });
});
