/** @jsx React.DOM */

/*
  input attributes:
    user (required)
*/

var React = require('react/addons')
  , Button = require('react-bootstrap').Button
  , Grid = require('react-bootstrap').Grid
  , Col = require('react-bootstrap').Col
  , Row = require('react-bootstrap').Row
  , Panel = require('react-bootstrap').Panel
  , Input = require('react-bootstrap').Input
  , ButtonInput = require('react-bootstrap').ButtonInput

;

var ReactComponent = React.createClass({

  /*
    render
  */

  render: function () {
    console.log('User.Login.render');

    var thisComponent = this;
    var compositionComponent = this.props.compositionComponent;

    return (

      <div id="login-controls-container">
        <Grid>
          <Row className="show-grid">
            <Col md={4}>
            </Col>
            <Col md={4}>
              <Panel>
                <Input type="text" label="Email" />
                <Input type="password" label="Password" /> 
                <ButtonInput value="Login" />
              </Panel>
  

              <Panel>
                <a href="/user/google_auth">Login with Google</a>
              </Panel>
            </Col>
            <Col md={4}>
            </Col>
          </Row>
        </Grid>
      </div>

    );

  },

});

module.exports.ReactComponent = ReactComponent;
