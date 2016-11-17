var gulp = require('gulp');
var spawn = require('child_process').exec;
var gutil = require('gulp-util');

function deploy() {
    var cmd = 'deploy.sh'; 

    var child = spawn(cmd, {encoding: 'utf-8'});

    child.stdout.on('data', function (data) {
        gutil.log('hugo: \n' + data);
    });

    child.stderr.on('data', function (data) {
        gutil.log('hugo: \n' + data);
    });
}

gulp.task('deploy', ['hugo:public'], deploy());
