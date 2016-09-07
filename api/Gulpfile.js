// Gulpfile.js
var gulp          = require('gulp');
var nodemon       = require('gulp-nodemon');
var jshint        = require('gulp-jshint');
var Configuration = require('./configuration/configuration.json');
var Logger        = require(Configuration.routes.winstonLogger);

gulp.task('lint', function () {
  gulp.src(Configuration.gulp.src)
    .pipe(jshint());
});

gulp.task('server', function () {
    nodemon({
      script: Configuration.gulp.script,
      ext   : Configuration.gulp.ext,
      ignore: Configuration.gulp.ignore,
      tasks : ['lint']
    })
    .on('restart', function () {
      Logger.info('Server restarted...');
    });
});
