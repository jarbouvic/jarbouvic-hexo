var gulp = require('gulp');
var shell = require('./tools/shellHelper');
var path = require('path');
var del = require('del');

function hugo(publish, cb) {
    var src = path.join(process.cwd(), 'hugo');
    var dst = path.join(process.cwd(), 'hugo/public');

    var cmd = 'hugo'; 
    cmd += (publish) ? ' -d ' + dst : ' server';
    cmd += ' -t perso -s '+ src;
    cmd += (publish) ? '' : ' --buildDrafts --verbose';

    shell.exec(cmd, cb)
}

gulp.task('hugo:public', ['build'], function(cb) {
    hugo(true, cb);
});

gulp.task('hugo:serve', ['build'], function(cb) {
    hugo(false, cb);
});
