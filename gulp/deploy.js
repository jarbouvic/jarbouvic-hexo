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
<<<<<<< HEAD
    process.chdir('../jarbouvic.github.io');
=======
    process.chdir('hugo/public');
>>>>>>> 8b01ba4ac835458e6b56f1557b03a6401c6b0951
    git_push(cb);
});

gulp.task('deploy', function(cb) {
    runSequence('hugo:prod','git:push', 'git:publish',cb);
});