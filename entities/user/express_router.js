var express = require('express')
  , async = require('async')
  , passport = require('passport')
;

// this module is an express router
var app = express()
  , router = express.Router();

// handlers
var user_handler = require('./express_handler')
;

// routes

/*
  login
  - GET: renders user interface for login
  - POST: performs login with passport google oauth2
*/

router.get('/login'
  , function (req, res, next) { console.log('UserRouter: GET /login'); next();}
  , user_handler.render_login
  , user_handler.end
);


// this is a router
module.exports = router;
