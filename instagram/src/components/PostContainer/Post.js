import React from 'react';
import CommentSection from '../CommentSection/CmtSecCnt';
import PostHeader from './PostHdr';

import './Post.css';

const Post = props =>{
    return (
        <div className='post-border'>
        <PostHeader
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
        />
        <div className='post-img-wrapper'>
            <img
            alt='post thumb'
            className='post-img'
            src={props.post.imageUrl}
            />
        </div>
        <CommentSection comments={props.post.comments} />
        </div>
    );
};

export default Post;