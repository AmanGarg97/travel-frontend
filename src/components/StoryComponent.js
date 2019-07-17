import React, { Component } from 'react';
import { graphql } from 'react-apollo'
import StoryTemplate from './StoryTemplate'
import { getStoryQuery } from '../queries/query'
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';

class StoryComponent extends Component {
  displayStory() {
    var data = this.props.data;
    if (data.loading) {
      return (<div>Loading Stories . . .</div>)
    } else {
      return data.allStories.map(story => {
        return (
          <StoryTemplate key={story.id} storyTitle={story.title} subStory={story.subStory} />

        )
      }
      )

    }
  }
  render() {
    return (
      <span className='box-field'>
        <h2 className="heading">Story Feed</h2>
        {this.displayStory()}

      </span>
    )
  }
}

export default graphql(getStoryQuery)(StoryComponent);