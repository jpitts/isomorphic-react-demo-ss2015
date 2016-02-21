var gulp       = require('gulp'),
    concat     = require('gulp-concat'),
    browserify = require('gulp-browserify');

var paths = {
  jsx: ['components/**/react/*.jsx'],
  images: 'public/images/**/*'
};

gulp.task('client_scripts', function () {

  gulp.src([
      'components/auth/client.js',
      'components/foyer/client.js',
      'components/workspace/client.js',
      'components/user/client.js',
    ])
    .pipe(concat('client.js'))
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



