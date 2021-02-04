import React from 'react';
import styled from 'styled-components';

const IntroText=styled.div
`
@media screen and (min-width:1280px){
text-align: left;
font: normal normal bold 24px/40px NanumSquare;
letter-spacing: 0px;
color: #101010;
opacity: 1;
}

@media screen and (max-width:1279px){
    text-align:left;
    font: normal normal bold 18px/28px NanumSquare;
    letter-spacing:0px;
    color:#101010;
    opactiy:1;
}
`;

function ForIntroText(){
    return <IntroText>선배님들이 했던 프로젝트들이에요!<br></br>너무 많아서 몇 가지만 골라봤어요 :)</IntroText>;
}

export default ForIntroText;