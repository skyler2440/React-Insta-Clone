import React from 'react';
import './Post.css';

const PostHeader = props => {
    return (
        <div className='post-hdr'>
            <div className='post-thmb-wrapper'>
            <img
            alt='post-hdr'
            className='post-thmb'
            src={props.thumbnailUrl}
            />
            </div>
            <div className='post-name'>{props.username}</div>
        </div>
    );
};

export default PostHeader;