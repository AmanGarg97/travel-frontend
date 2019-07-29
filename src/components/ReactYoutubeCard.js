import React, { Component } from 'react';
import { ProductCard } from 'react-ui-cards'
import YouTube from 'react-youtube-embed'



class App extends Component {

    constructor(props){
        super(props)
    }
    render() {
        return (

            <div className='card-container'>
                {/* <ProductCard
                    photos={[
                        'https://www.youtube.com/watch?v=aftCqtnN6Tg',
                        // 'https://i.imgur.com/raPe27t.jpg',
                        // 'https://i.imgur.com/IpEsYSH.jpg'
                    ]}
                    productName='Headphones'
                    description='Donec lectus nulla, molestie aliquam nisl vitae, tempor placerat magna. Morbi dignissim in felis vel aliquet.'
                    buttonText='Add to cart'
                    url='https://github.com/nukeop'
                /> */}
                <YouTube id={this.props.videoId} />


            </div>
        );
    }
}

export default App;
