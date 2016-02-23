
/*
  Isomorphic React Demo for Spring/Summer 2015

  key environment variables: 
    NODE_ENV
    APP_ENABLE_ISO
*/

var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    favicon = require('serve-favicon'),
    methodOverride = require('method-override'),
    multer = require('multer'),
    errorHandler = require('errorhandler'),
    AuthExpressConfig = require('./entities/auth/express_config.js')
;

// JSX transpiler
//require("node-jsx").install();
require('node-jsx').install({extension: '.jsx'});

// express app
var app = express();

// enable isomorphic react
app.set('enable_isoreact', (process.env.APP_ENABLE_ISOREACT == 'false' ? false : true) );

console.log('Service running with NODE_ENV=' + process.env.NODE_ENV + '.')
console.log('Service running with APP_ENABLE_ISOREACT=' + app.get('enable_isoreact') + '.')

// load configs
var config;
try {
  require.resolve('./config/' + process.env.NODE_ENV);
  config = require('./config/' + process.env.NODE_ENV).config;

} catch (e) {
  console.warn('Service will use the default config: config/environment.js.default');

  // fall back to the default config
  try {
    require.resolve('./config/environment.js.default');
    config = require('./config/environment.js.default').config;

  } catch (e) {
    console.error('Cannot load config/environment.js.default!');
    process.exit(e.code);
  }

} 


// app globals
app.set('entities_dir', __dirname + '/entities');
app.set('config', config);

// http configurations
app.set('port', config.port);
app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());

// session and auth config
AuthExpressConfig.init({ app:app, config:config });

// development only
if (app.get('env') == 'development') {
  app.use(errorHandler());
}

// static files
app.use(express.static(path.join(__dirname, '/public')));

//routes
app.use('/', require('./entities/foyer/express_router.js'));
app.use('/auth', require('./entities/auth/express_router.js'));
app.use('/foyer', require('./entities/foyer/express_router.js'));
app.use('/user', require('./entities/user/express_router.js'));

// start it up
var server = app.listen(process.env.NODE_PORT || config.port, function() {
  var host = server.address().address
  var port = server.address().port
  console.log('Express 4 server listening at http://%s:%s', host, port);
});


