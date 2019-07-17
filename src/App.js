import React, { Component } from 'react';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

//components
import StoryComponent from './components/StoryComponent'
// import VideoFeed from './components/VideoFeed'
import NewsFeed from './components/NewsFeed'
// import CardTemplate from './components/CardTemplate'
import SearchBar from './components/SearchBar'
// import Test from './components/test'
// import SliderTest from './components/SliderTest'


//apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:2000/graphql',
})


class App extends Component {


  render() {
    return (
      <div className='box-field'>
        <ApolloProvider client={client}>
          <SearchBar />
          {/* <h2>Trending Stories</h2> */}
          <span className="dashed-shadow hello">Trending Stories!</span>
          <br />
          <img src={require("./images/background.jpg")} width="100%" height="50%" alt="sample"/>
          <StoryComponent />
          {/* <VideoFeed/> */}
          <NewsFeed />
          {/* <SliderTest/> */}
        </ApolloProvider>

      </div>

    );
  }
}

export default App;
