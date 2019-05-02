import React from 'react';
import './Post.css'
import { FlexWrapper } from '../CommentSection/Cmt';
import styled from 'styled-components';
const LikeSectionDiv = styled.div`
  height: 10px;
  width: 10px;
  margin: 10px;
  padding-bottom 15px;
`;

const LikeSection = props => {
  return [
    <FlexWrapper
      key="likes-icons-container"
      onClick={props.incrementLike}
      comment
    >
      <LikeSectionDiv>
        <i className="far fa-heart" />
      </LikeSectionDiv>
      <LikeSectionDiv>
        <i className="far fa-comment" />
      </LikeSectionDiv>
    </FlexWrapper>,
    <FlexWrapper key="likes-container" comment>
      <LikeSectionDiv>{props.likes}</LikeSectionDiv>
    </FlexWrapper>
  ];
};
// const LikeSection = props => {
//     return [
//         <div
//         className='like-section'
//         key='likes-icons-container'
//         // onClick={props.incrementLike}
//         >
//         <div className='like-section-wrapper'>
//             <i className='far fa-heart'
//             onClick={props.incrementLike}/>
//         </div>
//         <div className='like-section-wrapper'>
//             <i className='far fa-comment' />
//         </div>
//         </div>,
//         <div className='like-section' key='likes-container'>
//             <div className='like-section-wrapper'>{props.likes}</div>
//         </div>
//     ]
// }
export default LikeSection;