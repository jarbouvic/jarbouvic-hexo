var gulp = require('gulp');
var runSequence = require('run-sequence');
var argv = require('yargs').argv;
var shell = require('./tools/shellHelper');

function git_push(cb) {
    var today= new Date().toISOString().slice(0, 10);
    var msg= (argv.msg) ? argv.msg : 'rebuilding\ site\ '+today;
    msg = msg.split(' ').join('+');
    shell.series([
        'git add --all .',
        "git commit -m '"+ msg +"'",
        'git push origin master'
    ], cb);
}

gulp.task('git:push', function(cb) {
    git_push(cb);
});

gulp.task('git:publish', function(cb) {
    process.chdir('hugo/public');
    git_push(cb);
});

gulp.task('deploy', function(cb) {
    runSequence('hugo:prod','git:push', 'git:publish',cb);
});