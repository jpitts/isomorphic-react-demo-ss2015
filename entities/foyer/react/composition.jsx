/** @jsx React.DOM */

var React = require('react/addons')
  , Header = require('../../app/react/header.jsx').ReactComponent
  , Controls = require('./controls.jsx').ReactComponent
;

var FoyerComposition = React.createClass({

  /* 
    get initial state
  */

  getInitialState: function() {
    console.log('Foyer.Composition.getInitialState');
    //console.log(' component props ', this.props);
    
    var thisComponent = this;
    
    return {
      user: thisComponent.props.user
    };

  },

 
  /*
    render
  */

  render: function () {
    console.log('Foyer.Composition.render');
    var thisComponent = this;

    // final assembly
    return (
      <div>

        <Header
          compositionComponent={this} 
          user={this.state.user}
        />

        <Controls
          compositionComponent={this} 
          user={this.state.user}
        />

      </div>
    );
  }
});

module.exports.FoyerComposition = FoyerComposition;  

