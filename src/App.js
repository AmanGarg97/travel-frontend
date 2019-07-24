import React, { Component } from 'react';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { Route } from 'react-router-dom'
import PlayerTest from './components/PlayerTest'

//components
import StoryComponent from './components/StoryComponent'
// import NewsFeed from './components/NewsFeed'
import SearchBar from './components/SearchBar'
import DashBoard from './components/content-board/Dashboard'
import VideoFeed from './components/VideoFeed';


//apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:2000/graphql',
})

class App extends Component {


  render() {
    return (
      <div className='box-field'>
        <ApolloProvider client={client}>
          <div className="">
            <Route exact path="/" component={SearchBar} />
            <Route exact path="/" component={StoryComponent} />

            <br />
            {/* <img src={require("./images/background.jpg")} width="100%" height="50%" alt="sample"/> */}
            {/* <Route exact path="/" component={StoryComponent} /> */}
            {/* <Route exact path="/" component={VideoFeed} /> */}

            {/* <VideoFeed/> */}
            {/* <NewsFeed /> */}
          </div>
          <Route exact path="/dashboard" component={DashBoard} />
        </ApolloProvider>
      </div>

    );
  }
}

export default App;
