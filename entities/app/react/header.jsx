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
    MenuItem = require('react-bootstrap').MenuItem
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
      authJsx=(
        <Nav pullRight>
          <NavItem eventKey={1} href="/auth/logout">Log Out</NavItem>
        </Nav>
      );

    } else {
      authJsx=(
        <Nav pullRight> 
          <MenuItem>Log In With:</MenuItem>
          <NavItem eventKey={1} href="/auth/authenticate-google">Google</NavItem>
        </Nav>
      );

    }

    return (
      <div>
        <Navbar>
          <NavBrand>
            <a href="/">Isomorphic React Demo</a>
          </NavBrand>
          {authJsx}
        </Navbar>
      </div>
    );
    
  }

});

module.exports.ReactComponent = ReactComponent;

