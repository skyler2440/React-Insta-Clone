import React from 'react';
import dummyData from './dummy-data';
import './App.css';
import SearchBar from './components/SearchBar/SBC';
import PostsContainer from './components/PostContainer/PostCnt';
import Post from './components/PostContainer/Post';
class App extends React.Component{
  constructor(){
    super();
    this.state= {
      post: [],
      username: ''
    };
  }
componentDidMount() {
  this.setState({post: dummyData})
}
// searchPostHandler = e => {
//   const post = this.state.posts.filter(p => {
//     if (p.username.includes(e.target.value)) {
//       return p;
//     }
//   });
//   this.setState({filteredPost: post});
// };
searchPostHandler = () => {
  if (this.state.username) {
    return this.state.post.filter(post => {
      return post.username.includes(this.state.username)
    });
  }
  return this.state.post
}
changeHandler = event =>{
  this.setState({username: event.target.value });
};
render() {
  const filteredPost = this.searchPostHandler();
  return (
    <div className="App">
     <SearchBar 
    //  searchPostHandler={this.searchPostHandler}
    post={this.state.username}
     changeHandler={this.changeHandler}
     />
     <div>
     {
            filteredPost && filteredPost.map((post) => {
              return <Post
                key={post.timestamp}
                post={post} />
            })
          }
     </div>
    </div>
  );
}
}

export default App;
