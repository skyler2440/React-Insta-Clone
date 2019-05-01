import React from 'react';

const CommentInput = props => {
    return (
        // <span className='cmt-text-wrapper'></span>
        <form onSubmit={props.submitComment}>
            <input 
            className='inpt-txt' 
            type="text" 
            value={props.comment}
            placeholder='Add a Comment...'
            onChange={props.changeComment}
            />
        </form>
        
    );


};

export default CommentInput;