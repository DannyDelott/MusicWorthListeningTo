/*
 * Dependencies
 */
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var nodemon = require('gulp-nodemon');

/*
 * Paths
 */
var path = {};
path.INDEX_SRC = './client/index.html';
path.BOWER_COMPONENTS_DIR = './bower_components/';
path.VENDOR_DIR = './client/dist/vendor/';
path.REACT_DIR = path.BOWER_COMPONENTS_DIR + 'react/';
path.REACT_SRC = [
  path.REACT_DIR + 'react.js',
  path.REACT_DIR + 'JSXTransformer.js'
];
path.REACT_MIN = 'react-with-jsxtransformer.min.js';
path.SERVER_DIR = './server/';
path.SERVER_SRC = path.SERVER_DIR + 'server.js';
/*
 * Tasks
 */

gulp.task('default', []);
gulp.task('build', ['vendor']);
gulp.task('dev', ['nodemon']);

/*******************************************************
 * Uglify and concat third party libraries/frameworks  *
 * *****************************************************/
gulp.task('vendor', function() {

  // React
  gulp.src(path.REACT_SRC)
    .pipe(uglify())
    .pipe(concat(path.REACT_MIN))
    .pipe(gulp.dest(path.VENDOR_DIR));

});

/**********************************
 * Start the server with nodemon  *
 * ********************************/
gulp.task('nodemon', function() {
  nodemon({
    script: path.SERVER_SRC,
    ext: 'js html'
  });
});
