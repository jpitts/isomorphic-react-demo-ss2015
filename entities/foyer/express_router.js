var express = require('express')
  , async = require('async');

// this module is an express router
var app = express()
  , router = express.Router();

// handlers
var foyer_handler = require('./express_handler')
  , user_handler = require('../user/express_handler')
;

// routes

/*
  index
  - renders user interface for header, controls for workspaces, list of workspaces
*/

router.get('/'
  , function (req, res, next) { console.log('FoyerRouter: GET /'); next();}
  , user_handler.set_user
  , foyer_handler.render_foyer
  , foyer_handler.end
);


// this is a router
module.exports = router;

