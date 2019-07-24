import React, { Component } from 'react';
import { NewsHeaderCard } from 'react-ui-cards'
import './NewsCard.css'

class NewsCard extends Component {

    render() {
        return (
            <div className='card-container'>
                <NewsHeaderCard
                    href='https://github.com/nekonee'
                    thumbnail='https://i.imgur.com/rLFk5nd.jpg'
                    title='Polish mountaineers on the top'
                    author='Daily Sport'
                    date='Feb 2, 2018'
                />
            </div>
        );
    }
}

export default NewsCard;
