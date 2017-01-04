var gulp = require('gulp');
var shell = require('./tools/shellHelper');
var path = require('path');

function hugo_dev(cb) {
    shell.exec('hugo server -wv -t perso -s .\\hugo --buildDrafts --ignoreCache', cb);
}

function hugo_prod(cb) {
    shell.exec('hugo -t perso -s .\\hugo -d ..\\..\\jarbouvic.github.io', cb);
}

gulp.task('hugo:prod', ['build'], function(cb) {
    hugo_prod(cb);
});

gulp.task('hugo:dev', ['build'], function(cb) {
    hugo_dev(cb);
});
