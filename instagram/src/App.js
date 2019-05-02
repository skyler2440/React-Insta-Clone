import React from 'react';
// import dummyData from './dummy-data';
import './App.css';
// import SearchBar from './components/SearchBar/SBC';
import PostsPage from './components/PostContainer/PostPage';
import LoginPage from './components/Login/LoginPage';
import withAuthenticate from './components/Authentication/withAuthenticate';
// import Post from './components/PostContainer/Post';
class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <ComponentFromWithAuthenticate />
      </div>
    );
  }
}

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(LoginPage);

// export default App;
export default App;
