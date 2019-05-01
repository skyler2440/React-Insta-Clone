import React from 'react';
import PropTypes from 'prop-types'
import CommentSection from '../CommentSection/CmtSecCnt';
import LikeSection from './LikeSection';
import PostHeader from './PostHdr';

import './Post.css';

class Post extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            likes: props.post.likes
        };
    }
    incrementLike = () => {
        let likes = this.state.likes + 1;
        this.setState({ likes });
    };
    render() {
    return (
        <div className='post-border'>
        <PostHeader
        username={this.props.post.username}
        thumbnailUrl={this.props.post.thumbnailUrl}
        />
        <div className='post-img-wrapper'>
            <img
            alt='post thumb'
            className='post-img'
            src={this.props.post.imageUrl}
            />
        </div>
        <LikeSection
        incrementLike={this.incrementLike}
        likes={this.state.likes}
        />
        <CommentSection
        postId={this.props.post.imageUrl} 
        comments={this.props.post.comments}
        />
        </div>
    );
}
}

Post.propTypes = {
    post: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string
    })
};

export default Post;