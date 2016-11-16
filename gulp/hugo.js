var gulp = require('gulp');
var spawn = require('child_process').exec;
var gutil = require('gulp-util');
var path = require('path');
var del = require('del');

function hugo(drafts) {
    var src = path.join(process.cwd(), 'hugo');
    var dst = path.join(process.cwd(), 'public');

    gutil.log('src: ' + src);

    var cmd = 'hugo server -t perso -s ' + src ;
    if (drafts) {
        cmd += ' --buildDrafts=true --verbose';
    }

    var child = spawn(cmd, {encoding: 'utf-8'});

    child.stdout.on('data', function (data) {
        gutil.log('hugo: \n' + data);
    });

    child.stderr.on('data', function (data) {
        gutil.log('hugo: \n' + data);
    });

}

gulp.task('hugo:draft', function() {
    hugo(true);
});

gulp.task('hugo:all', ['build:all'], function() {
    hugo(true);
});
