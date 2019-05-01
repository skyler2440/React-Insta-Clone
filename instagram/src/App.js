import React from 'react';
import dummyData from './dummy-data';
import './App.css';
import SearchBar from './components/SearchBar/SBC';
import PostsContainer from './components/PostContainer/PostCnt';

class App extends React.Component{
  constructor(){
    super();
    this.state= {
      post: dummyData
    };
  }

render() {
  return (
    <div className="App">
     <SearchBar />
     <PostsContainer post={this.state.post}/>
    </div>
  );
}
}

export default App;
