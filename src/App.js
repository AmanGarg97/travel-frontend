import React, { Component } from 'react';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

//components
import StoryComponent from './components/StoryComponent'
import VideoFeed from './components/VideoFeed'
import NewsFeed from './components/NewsFeed'
// import CardTemplate from './components/CardTemplate'
// import SearchBar from './components/SearchBar'
import Test from './components/test'


//apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:2000/graphql',
})
  

class App extends Component {


  render() {
    return (
      <div className='box-field'>
        <ApolloProvider client={client}>
          <StoryComponent />
          <VideoFeed/>
          <NewsFeed/>
=
        </ApolloProvider>

      </div>

    );
  }
}

export default App;
