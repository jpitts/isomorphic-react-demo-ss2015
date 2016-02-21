var express = require('express');

// this module is an express router
var app = express();
var router = express.Router();

// routes

/*
  reset

  Resets the session.

*/

router.get('/reset', function (req, res, next) { 
  req.session.destroy(function() {});
  delete req.sessionID;
  res.redirect('/which_sold_for');
  //res.json({ success: true });
});

// this is a router
module.exports = router;

