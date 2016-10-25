var express = require('express')
  , async = require('async')
  , passport = require('passport')
;

// this module is an express router
var app = express()
  , router = express.Router();

// handlers
var auth_handler = require('./express_handler')
  , user_handler = require('../user/express_handler')
;

/*
  authenticate
  logout
  redirect
*/

router.get('/authenticate-local'
  , function (req, res, next) { console.log('AuthRouter GET /auth/authenticate-local'); next();}
  , passport.authenticate('local', { scope: ['profile'] })
);

router.get('/authenticate-github'
  , function (req, res, next) { console.log('AuthRouter GET /auth/authenticate-github'); next();}
  , passport.authenticate('github', { scope: ['profile'] })
);

router.get('/authenticate-google'
  , function (req, res, next) { console.log('AuthRouter GET /auth/authenticate-google'); next();}
  , passport.authenticate('google', { scope: ['profile'] })
);

router.get('/authenticate-twitter'
  , function (req, res, next) { console.log('AuthRouter GET /auth/authenticate-twitter'); next();}
  , passport.authenticate('twitter', { scope: ['profile'] })
);


router.get('/logout'
  , function (req, res, next) { console.log('AuthRouter GET /auth/logout'); next();}
  , function (req, res, next) {
      req.session.destroy(); 
      res.redirect('/');
      next();
  }
  , auth_handler.end
);

router.get('/redirect'
  , function (req, res, next) { console.log('AuthRouter GET /auth/redirect'); next();}
  , passport.authenticate('google', { failureRedirect: '/auth/fail' })
  , function (req, res, next) { res.redirect('/'); next(); }
  , auth_handler.end
);

/*
  api get user
*/

router.get('/api/session'
  , function (req, res, next) { console.log('AuthRouter GET /auth/redirect'); next();}
  , user_handler.set_user
  , function (req, res, next) { res.json({ user: res.locals.user }); next();}
  , auth_handler.end
); 


// this is a router
module.exports = router;
