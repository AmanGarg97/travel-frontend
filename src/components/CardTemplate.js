import React, { Component } from 'react';
// import { Card, Button } from 'react-bootstrap';
import { Card, Button } from 'react-bootstrap';


export default class CardTemplate extends Component {
  render() {
    console.log(this.props.src)
    return (
      <div id="haah">
        <Card style={{ width: '15rem', display: 'inline-block' }}>
          <Card.Img variant="top" src={this.props.src} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <br /><br />
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        
      </div>
    )
  }
}

