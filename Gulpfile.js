var gulp       = require('gulp'),
    concat     = require('gulp-concat'),
    browserify = require('gulp-browserify')
    debug      = require('gulp-debug')
;

var paths = {
  jsx: ['components/**/react/*.jsx'],
  images: 'public/images/**/*'
};

gulp.task('client_scripts', function () {

  gulp.src([
      'entities/auth/client.js',
      'entities/foyer/client.js',
      'entities/workspace/client.js',
      'entities/user/client.js',
    ])
    //.pipe(debug({title: 'debug:'}))
    .pipe(concat('client.js'))
    //.pipe(debug({title: 'debug:'}))
    .pipe(browserify({
      debug: true,
      transform: [ 'reactify' ]
      //transform: [ 'reactify', {"es6": true} ]
    }))
    .pipe(gulp.dest('./public/js/isomorphic-react-demo-ss2015/'));

});

// rerun the task when a file changes
gulp.task('watch', function() { 
  gulp.watch(paths.jsx, ['client_scripts']);
});

// default gulp task
gulp.task('default', ['client_scripts']);



