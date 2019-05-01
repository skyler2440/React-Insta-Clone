import React from 'react';
import './Post.css'
const LikeSection = props => {
    return [
        <div
        className='like-section'
        key='likes-icons-container'
        // onClick={props.incrementLike}
        >
        <div className='like-section-wrapper'>
            <i className='far fa-heart'
            onClick={props.incrementLike}/>
        </div>
        <div className='like-section-wrapper'>
            <i className='far fa-comment' />
        </div>
        </div>,
        <div className='like-section' key='likes-container'>
            <div className='like-section-wrapper'>{props.likes}</div>
        </div>
    ]
}
export default LikeSection;