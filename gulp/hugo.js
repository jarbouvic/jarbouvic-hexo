var gulp = require('gulp');
var spawn = require('child_process').exec;
var gutil = require('gulp-util');
var path = require('path');
var del = require('del');

function hugo(publish) {
    var src = path.join(process.cwd(), 'hugo');
    var dst = path.join(process.cwd(), 'hugo/public');

    gutil.log('src: ' + src);

    var cmd = 'hugo'; 
    cmd += (publish) ? ' -d ' + dst : ' server';
    cmd += ' -t perso -s '+ src;
    cmd += (publish) ? '' : ' --buildDrafts --verbose';

    var child = spawn(cmd, {encoding: 'utf-8'});

    child.stdout.on('data', function (data) {
        gutil.log('hugo: \n' + data);
    });

    child.stderr.on('data', function (data) {
        gutil.log('hugo: \n' + data);
    });

}

gulp.task('hugo:public', ['build'], function() {
    hugo(true);
});

gulp.task('hugo:serve', ['build'], function() {
    hugo(false);
});
