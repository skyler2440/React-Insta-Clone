import React from 'react';
import styled from 'styled-components';

const CommentForm = styled.form`
  border-top: 1px solid #e3e3e3;
  width: 100%;
  height: 70px;
`;
const CommentInputField = styled.input`
  border: none;
  height: 100%;
  width: 95%;
  padding: 0 15px;
  &:focus {
    outline: none;
  }
`;
const CommentInput = props => {
    return (
        <CommentForm onSubmit={props.submitComment}>
            <CommentInputField
                className='inpt-txt'
                type="text"
                value={props.comment}
                placeholder='Add a Comment...'
                onChange={props.changeComment}
            />
        </CommentForm>
        // <form onSubmit={props.submitComment}>
        //     <input 
        //     className='inpt-txt' 
        //     type="text" 
        //     value={props.comment}
        //     placeholder='Add a Comment...'
        //     onChange={props.changeComment}
        //     />
        // </form>

    );


};

export default CommentInput;