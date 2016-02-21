/** @jsx React.DOM */

var React = require('react/addons');

(function (DEMO) {
  
  // namespace for this game
  var foyer = (DEMO.foyer = {});

  /* 
    foyer init
  */

  DEMO.foyer.init = function (attr, cb) {
    console.log('DEMO.foyer client init');

    DEMO.auth.get_session({}, function (err, session) {
      var user = (session ? session.user : undefined);
      console.log(user);

      // the react app starts with the composition
      var mountNode = document.getElementById("react-main-mount");
      var Composition = require('../foyer/react/composition.jsx').FoyerComposition;

      // render the react app
      React.render(<Composition 
        user={user}
      />, mountNode);
          
      // callback
      if (cb) { cb(null); }

    });

  }


}) (( window.DEMO=window.DEMO || {}));

