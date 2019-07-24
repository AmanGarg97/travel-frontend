import React, { Component } from 'react';
// import ReactPlayer from 'react-player'
import { getVideoQuery } from '../queries/query'
import { graphql } from 'react-apollo'
import CardTemplate from './CardTemplate'


const opts = {
    height: '80',
    width: '120',
    playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
    },
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
                console.log(video.url)
                return (
                    // <div>
                    //     <YouTube
                    //         videoId={video.videoId}
                    //         opts={opts}
                    //         onReady={this._onReady}
                    //         controls='0'
                    //     />
                    //     <h4>{video.title}</h4>
                    // </div>
                    <CardTemplate src={video.url} link={video.url} title={video.title}/>
                )
            }
            )
        }
    }
    render() {
        return (
            <div className="video-div">
                <h2 className="dashed-shadow hello">Video Feed</h2>

                {this.getVideos()}

            </div>

        );
    }
}

export default graphql(getVideoQuery, {
    options: (props) => {
        return {
            variables: {
                query: 'Bangalore Travel Vlog',
                limit: 2
            }
        }
    }
})(VideoFeed);
