/*

  devel.js

  Runs the application under forever-monitor, useful for developing. 
  
  After file changes:
  1. Restarts, waits if some breaking error persists.

  2. Runs gulp, ensuring that the js file gets rebuilt.

*/


/*
  run and monitor the service
*/

// forever monitor
var forever = require('forever-monitor');

// exec unix command
var exec = require('child_process').exec;

// start and monitor the application
// SEE: https://github.com/foreverjs/forever-monitor

var child = new (forever.Monitor)('app.js', {
  
  max: 3, // max number of times a script should run
  silent: false,

  args: [ 
    //"--harmony"
  ],

  env: {
    'NODE_ENV': (process.env.NODE_ENV ? process.env.NODE_ENV : 'development'),
    'APP_ENABLE_ISOREACT': (process.env.APP_ENABLE_ISOREACT ? process.env.APP_ENABLE_ISOREACT : false),
  },
  
  // watch files for changes
  watch: true,
  watchIgnoreDotFiles: null,
  watchDirectory: './',
  watchIgnorePatterns: [
    'public/js/isomorphic-react-demo-ss2015/client.js',
    'vendor/mongodb/**',
    'vendor/redis/**',
    'node_modules/**'
  ] 

});

// child event callbacks

child.on('watch:restart', function(info) {
   console.log('devel: restarting app.js: ' + info.file + ' changed.');

   // rebuild the js file with gulp
   console.log('devel: rebuild the client.js file.');
    var cmd = './node_modules/gulp/bin/gulp.js';
    exec(cmd, function(error, stdout, stderr) {
      console.log('devel: run gulp cmd: ' + cmd);
      //console.log(stdout);
      if (stderr) {console.error('devel: run gulp failed:' + stderr);}
    });

});

child.on('exit', function () {
  console.log('devel: forever-monitor gave up after 3 restarts!');
  console.log('devel: forever-monitor will watch files in the meantime.');
});


// start it up
console.log('devel: forever-monitor now starting.');
child.start();


