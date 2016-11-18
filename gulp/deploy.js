var gulp = require('gulp');
var git = require('gulp-git');
var run = require('gulp-run');
var exec = require('child_process').exec;


gulp.task('git-add', function(cb) {
  exec('git add --all .', function(err) {
    if (err) return cb(err); // return error
    cb(); // finished task
  });
});

gulp.task('git-commit', ['git-add'], function(cb) {
  exec('git commit -m "test"', function(err) {
    if (err) return cb(err); // return error
    cb(); // finished task
  });
});

gulp.task('git-push', ['git-commit'], function(cb) {
  exec('ssh-agent bash -c "ssh-add C:\Users\Victor\.ssh\id_rsa; git push origin master"', function(err) {
    if (err) return cb(err); // return error
    cb(); // finished task
  });
});

function git_add(msg) {
    return gulp.src('.')
        .pipe(git.add())
        .pipe(git.commit(msg))
        .pipe(git.push('origin', 'master', function (err) {
            if (err) throw err;
        }));
};

function git_run(msg) {
    return run('echo').exec(msg, callback);
};


gulp.task('deploy', ['git-push'], function() {
    process.chdir('hugo/public');
});
