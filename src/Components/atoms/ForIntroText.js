import React from 'react';
import styled from 'styled-components';

const IntroText=styled.div
`
<<<<<<< HEAD
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
=======
@media screen and (min-width:1280px)
{
    font-family: NanumSquareB;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: normal;
  text-align: left;
  color: #101010;
}
@media screen and (min-width:768px) and (max-width:1279px){
    font-family: NanumSquareR;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: normal;
    text-align: left;
    color: #101010;
}

@media screen and (max-width:767px){
    font-family: NanumSquareR;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: left;
  color: #101010;
>>>>>>> develop
}
`;

function ForIntroText(){
    return <IntroText>선배님들이 했던 프로젝트들이에요!<br></br>너무 많아서 몇 가지만 골라봤어요 :)</IntroText>;
}

export default ForIntroText;