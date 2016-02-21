/** @jsx React.DOM */

/*
  input attributes:
    user (required)
*/

var React = require('react/addons'),
    Button = require('react-bootstrap').Button,
    Grid = require('react-bootstrap').Grid,
    Col = require('react-bootstrap').Col,
    Row = require('react-bootstrap').Row,
    Panel = require('react-bootstrap').Panel
;

var ReactComponent = React.createClass({

  /*
    render
  */

  render: function () {
    console.log('Foyer.Controls.render');
   
    var thisComponent = this;
    var compositionComponent = this.props.compositionComponent;
    
    return (

      <div id="foyer-controls-container">
        <Grid>
          <Row className="show-grid">
            <Col md={4}>
              <Panel>
                <div>Workspace A</div>
              </Panel>
              <Panel>
                <div>Workspace D</div>
              </Panel>
            </Col>
            <Col md={4}>
              <Panel>
                <div>Workspace B</div>
              </Panel>
            </Col>
            <Col md={4}>
              <Panel>
                <div>Workspace C</div>
              </Panel> 
            </Col>
          </Row>
        </Grid>
      </div>

    );
    
  },

});

module.exports.ReactComponent = ReactComponent;


