import { gql } from 'apollo-boost';

const addStoryQuery = gql`
{
  allStories{
    title
    id
  }
}
`


const getStoryQuery = gql`
{
  allStories{
    title
    id
    subStory{
      url,
      description,
      title
    }
  }
}
`
const getVideoQuery = gql`
query GetVideo($query : String!,$limit:Int!){
    VideoFeed(query: $query , limit : $limit){
      videoId
    }
}
`
const getNewsQuery = gql`
query GetNews($query : String! , $limit : Int!){
        NewsFeed(query:$query , limit : $limit){
          description
          content
          title
          author
          url
          urlToImage
        }
      
}
`



export {
    addStoryQuery,
    getStoryQuery,
    getVideoQuery,
    getNewsQuery
}