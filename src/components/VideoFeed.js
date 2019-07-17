import React, { Component } from 'react';
// import ReactPlayer from 'react-player'
import { getVideoQuery } from '../queries/query'
import { graphql } from 'react-apollo'
import YouTube from 'react-youtube';
// import CardTemplate from './CardTemplate'


const divStyle = {
    display: 'inline'
}
const opts = {
    height: '80',
    width: '120',
    playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
    },
    display: 'inline'
};

class VideoFeed extends Component {
    getVideos() {
        var data = this.props.data;

        if (data.loading) {
            return (
                <div>Loading . . .</div>
            )
        } else {
            return data.VideoFeed.map(video => {
                return (
                    <YouTube
                        videoId={video.videoId}
                        opts={opts}
                        onReady={this._onReady}
                    />

                )
            }
            )
        }
    }
    render() {
        // console.log(this.props.data.VideoFeed)


        return (
            <div style={divStyle}>
                <h2 className="heading">Video Feed</h2>
                {/* <ReactPlayer url='https://www.youtube.com/embed/4TEKZxO8TLI' playing width="100px" height="80px"/> */}


                {this.getVideos()}
                {/* <CardTemplate/> */}
            </div>

        );
    }
}

export default graphql(getVideoQuery, {
    options: (props) => {
        return {
            variables: {
                query: 'delhi',
                limit: 2
            }
        }
    }
})(VideoFeed);
