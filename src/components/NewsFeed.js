import React, { Component } from 'react';
import { graphql } from 'react-apollo'
import { getNewsQuery } from '../queries/query'
import CardTemplate from './CardTemplate'


class NewsFeed extends Component {

    getNews() {
        var data = this.props.data;
        if (data.loading) {
            return (<div>Loading . . .</div>)
        } else {
            return data.NewsFeed.map(news => {
                // console.log(news.urlToImage)
                return (
                    // <div className="box-field">
                    //     <img src={news.urlToImage} alt=""/>
                    //     <a href={news.url}><h4>{news.title}</h4></a>
                    // </div>
                    <CardTemplate src={news.urlToImage} link={news.url} title={news.title}/>
                )
            }
            )
        }
    }
    render() {
        return (
            <div>
                <h2 className="heading">News Feed</h2>
                {this.getNews()}
            </div>

        );
    }
}

export default graphql(getNewsQuery, {
    options: (props) => {
        return {
            variables: {
                query: 'bangalore',
                limit: 2
            }
        }
    }
})(NewsFeed);
