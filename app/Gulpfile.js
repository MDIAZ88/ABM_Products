var gulp      = require('gulp');
var webserver = require('gulp-webserver');
var opn       = require('opn');

var server = {
  host: 'localhost',
  port: '3001'
};

gulp.task('webserver', function() {
  gulp.src( '.' )
    .pipe(webserver({
      host:             server.host,
      port:             server.port,
      livereload:       true,
      directoryListing: false
    }));
});

gulp.task('openbrowser', function() {
  opn( 'http://' + server.host + ':' + server.port );
});

gulp.task('server', ['webserver', 'openbrowser']);
