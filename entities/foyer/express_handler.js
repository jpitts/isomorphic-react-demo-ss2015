var React = require('react/addons')
  , jade = require('jade')

module.exports = {

  /*
    end
  */

  end: function (req, res, next) {
    res.end();
  },


  /*
    render foyer
  */

  render_foyer: function (req, res, next) {
    
    // react-rendered output
    var rendered = '';
    
    // isomorphic react enabled (pre-renders on server-side)
    if (req.app.get('enable_isoreact')) {
      // react input
      var rInput = {
        user: res.locals.user
      };
   
      // react component
      var rApp = React.createFactory(require('./react/composition').FoyerComposition);  
      rendered = React.renderToString( rApp(rInput) );
     
    } else {
      console.log('React not rendered on the server-side!');
      
    } // END react-rendered outout
 
    // jade mount
    var jadeOutput = jade.renderFile(
      req.app.get('entities_dir') + '/app/jade/index.jade', 
      { 
        layout: false, pretty: true,
        entityType: 'foyer',
        reactOutput: rendered
      }
    );

    res.write(jadeOutput);
    next();     

  },

};
