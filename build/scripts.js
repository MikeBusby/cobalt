//
// Scripts build task
//

const gulpif = require('gulp-if');

module.exports = function(gulp, plugins, config) {
  return function() {
    gulp.src([config.srcPath + 'js/**/*.js', !config.srcPath + 'www/js/*.min.js'])
      .pipe(gulpif(config.production, plugins.uglify()))
      .pipe(plugins.concat('main.min.js'))
      .pipe(gulp.dest(config.buildPath + 'js'));
  }
}