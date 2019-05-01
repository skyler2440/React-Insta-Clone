import React from 'react';
import dummyData from './dummy-data';
import './App.css';
import SearchBar from './components/SearchBar/SBC';
import PostsContainer from './components/PostContainer/PostCnt';

class App extends React.Component{
  constructor(){
    super();
    this.state= {
      post: [],
      filteredPost: []
    };
  }
componentDidMount() {
  this.setState({post: dummyData})
}
searchPostHandler = e => {
  const post = this.state.posts.filter(p => {
    if (p.username.includes(e.target.value)) {
      return p;
    }
  });
  this.setState({filteredPost: post});
};
render() {
  return (
    <div className="App">
     <SearchBar 
     searchTerm={this.state.searchTerm}
     searchPosts={this.state.searchPostHandler}
     />
     <PostsContainer 
     post={
       this.state.filteredPost.length > 0
        ? this.state.filteredPost
        : this.state.post
      }
       />
    </div>
  );
}
}

export default App;
