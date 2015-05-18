/* ***************
 * NODE PACKAGES *
 * ***************/

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var nodemon = require('gulp-nodemon');

/* ************
 * FILE PATHS *
 * ************/

var path = {};

/* Root */
path.BOWER_COMPONENTS_DIR = './bower_components/';

/* Client */
path.CLIENT_DIR = './client/';
path.DIST_DIR = path.CLIENT_DIR + './dist/';
path.VENDOR_DIR = path.DIST_DIR + 'vendor/';

path.INDEX_SRC = path.CLIENT_SRC + 'index.html';

path.REACT_DIR = path.BOWER_COMPONENTS_DIR + 'react/';
path.REACT_SRC = [
  path.REACT_DIR + 'react.js',
  path.REACT_DIR + 'JSXTransformer.js'
];
path.REACT_MIN_SRC = 'react-with-jsxtransformer.min.js';

/* Server */
path.SERVER_DIR = './server/';

path.SERVER_SRC = path.SERVER_DIR + 'server.js';

/* ************
 * GULP TASKS *
 * ************/

gulp.task('default', []);
gulp.task('build', ['vendor']);
gulp.task('dev', ['nodemon']);

/* Uglify and concat third party libraries/frameworks */
gulp.task('vendor', function() {

  // React
  gulp.src(path.REACT_SRC)
    .pipe(uglify())
    .pipe(concat(path.REACT_MIN_SRC))
    .pipe(gulp.dest(path.VENDOR_DIR));

});

/* Start the server with nodemon */
gulp.task('nodemon', function() {
  nodemon({
    script: path.SERVER_SRC,
    ext: 'js html'
  });
});
