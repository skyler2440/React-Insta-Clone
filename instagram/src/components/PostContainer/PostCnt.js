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
import './Post.css';

const PostsContainer = props => {
  return (
    <div className="post-cont-wrapper">
      {props.posts.map(p => <Post key={p.imageUrl} post={p} />)}
    </div>
  );
};

export default PostsContainer;