/** @jsx React.DOM */

/*
  input attributes:
    user (required)
    foyer (required)
    table (required)
*/

var React = require('react/addons'),
    Navbar = require('react-bootstrap').Navbar,
    Nav = require('react-bootstrap').Nav,
    NavBrand = require('react-bootstrap').NavBrand,
    NavItem = require('react-bootstrap').NavItem
;

var ReactComponent = React.createClass({

  /*
    render
  */

  render: function () {
    console.log('Common.Header.render');
   
    var thisComponent = this;
    var compositionComponent = this.props.compositionComponent;
   
    var authJsx;
    if (thisComponent.props.user) {
      authJsx=<NavItem eventKey={1} href="/auth/logout">Log Out</NavItem>;
    } else {
      authJsx=<NavItem eventKey={1} href="/auth/authenticate">Login with Google</NavItem>;
    }

    return (
      <div>
        <Navbar>
          <NavBrand>
            <a href="/">Isomorphic React Demo</a>
          </NavBrand>
          <Nav pullRight>
            {authJsx}
          </Nav>
        </Navbar>
      </div>
    );
    
  }

});

module.exports.ReactComponent = ReactComponent;

