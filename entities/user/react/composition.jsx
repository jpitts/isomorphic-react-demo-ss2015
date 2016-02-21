/** @jsx React.DOM */

var React = require('react/addons')
  , Header = require('../../app/react/header.jsx').ReactComponent
  , Login = require('./login.jsx').ReactComponent
;

var UserComposition = React.createClass({

  /* 
    get initial state
  */

  getInitialState: function() {
    console.log('User.Composition.getInitialState');
    //console.log(' component props ', this.props);

    var thisComponent = this;

    return {

    };
  },

  /*
    render
  */

  render: function () {
    console.log('User.Composition.render');
    var thisComponent = this;

    // final assembly
    return (
      <div>

        <Header
          compositionComponent={this}
        />

        <Login
          compositionComponent={this}
        />

      </div>
    );
  }
});
  
module.exports.UserComposition = UserComposition;
