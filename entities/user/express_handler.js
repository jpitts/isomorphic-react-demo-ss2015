var React = require('react/addons')
  , jade = require('jade')
;

module.exports = {

  /*
    end
  */

  end: function (req, res, next) {
    res.end();
  },

  /*
    render login
  */

  render_login: function (req, res, next) {

    // react-rendered output
    var rendered = '';

    // isomorphic react enabled (pre-renders on server-side)
    if (req.app.get('enable_isoreact')) {
      // react input
      var rInput = {
      };

      // react component
      var rApp = React.createFactory(require('./react/composition').UserComposition);
      rendered = React.renderToString( rApp(rInput) );

    } else {
      console.log('React not rendered on the server-side!');

    } // END react-rendered outout

    // jade mount
    var jadeOutput = jade.renderFile(
      req.app.get('entities_dir') + '/app/jade/index.jade',
      {
        layout: false, pretty: true,
        entityType: 'user',
        reactOutput: rendered
      }
    );

    res.write(jadeOutput);
    next();

  },


  /*
    set user
  */
    
  set_user: function (req, res, next) {
    
    // TODO: user needs to be set in the session
    console.error('User.express_handler: user not yet being set in session');
    res.locals.user = req.user; 
    next();

  },
  

};

