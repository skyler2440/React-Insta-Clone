// import React from 'react';
// import Post from './Post';
// import './Post.css';

// const PostsContainer = props => {
//         console.log('Post Cont Props', props)
//     return (
        // <div className='post-cnt-wrapper'>
        //  {props.post.(p => <Post key={p.imageUrl} post={p} />)} 
        //  </div>
//     );
// };

// export default PostsContainer;
import React from 'react';
import Post from './Post';

import styled from 'styled-components';

import './Post.css';
const PostWrapper = styled.div`
  height: 50%;
  width: 45%;
  min-width: 300px;
  margin: 5px auto;
`;
const PostsContainer = props => {
  return (
    <PostWrapper>
      {props.posts.map(p => <Post key={p.imageUrl} post={p} />)}
      </PostWrapper>
  );
};

export default PostsContainer;