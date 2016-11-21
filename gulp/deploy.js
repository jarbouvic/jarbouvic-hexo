var gulp = require('gulp');


// spawn a child process and execute shell command
// borrowed from https://github.com/mout/mout/ build script
// author Miller Medeiros
// released under MIT License
// version: 0.1.0 (2013/02/01)


// execute a single shell command where "cmd" is a string
var exec = function(cmd, cb){
    // this would be way easier on a shell/bash script :P
    var child_process = require('child_process');
    var parts = cmd.split(/\s+/g);
    console.log('$'+cmd);
    var p = child_process.spawn(parts[0], parts.slice(1), {stdio: 'inherit'});
    p.on('exit', function(code){
        console.log('$'+cmd+' --- END');
        var err = null;
        if (code) {
            err = new Error('command "'+ cmd +'" exited with wrong status code "'+ code +'"');
            err.code = code;
            err.cmd = cmd;
        }
        if (cb) cb(err);
    });
};


// execute multiple commands in series
// this could be replaced by any flow control lib
var series = function(cmds, cb){
    var execNext = function(){
        exec(cmds.shift(), function(err){   
            if (err) {
                cb(err);
            } else {
                if (cmds.length) execNext();
                else cb(null);
            }
        });
    };
    execNext();
};


gulp.task('git:push', function(cb) {
    var msg= "test";
    
    series([
        'git add --all .',
        'git commit -m "'+ msg +'"',
        'git push origin master'
    ], cb);

});
