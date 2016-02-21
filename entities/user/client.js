/** @jsx React.DOM */

var React = require('react/addons');

(function (DEMO) {
  
  // namespace for this game
  var user = (DEMO.user = {});

  /* 
    foyer init
  */

  DEMO.user.init = function (attr, cb) {
    console.log('DEMO.user client init');

    // the react app starts with the composition
    var mountNode = document.getElementById("react-main-mount");
    var Composition = require('../user/react/composition.jsx').UserComposition;

    // render the react app
    var is_ready_to_play=true;
    React.render(<Composition />, mountNode);
        
    // callback
    if (cb) { cb(null); }

  }


}) (( window.DEMO=window.DEMO || {}));

