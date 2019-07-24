import React, { Component } from 'react';
// import { Card, Button } from 'react-bootstrap';
import { Card, Button } from 'react-bootstrap';
import VideoPlayer from './VideoPlayer'


export default class CardTemplate extends Component {
  render() {
    // console.log(this.props.src)
    return (
      <div id="haah">
        <Card style={{ width: '15rem', display: 'inline-block' }}>
          {/* <Card.Img variant="top" src={<VideoPlayer/>} /> */}
          <VideoPlayer/>
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <br /><br />
            <Button variant="primary" onclick={this.props.link}>See More</Button>
          </Card.Body>
        </Card>
        
      </div>
    )
  }
}

