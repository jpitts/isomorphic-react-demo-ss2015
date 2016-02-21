/** @jsx React.DOM */

(function (DEMO) {

  // namespace for this game
  var auth = (DEMO.auth = {});

  /* 
    auth get session
    
    attrs:
      user
      
  */

  DEMO.auth.get_session = function (attr, cb) {
    console.log('DEMO.auth get_session');
    
    jQuery(document).ready(function() {
      
      // get the round and listing data
      jQuery.ajax({
        url: "/auth/api/session",
      })
      .done(function( session ) {
        cb(null, session);
      });

    });
 
  }


}) (( window.DEMO=window.DEMO || {}));


