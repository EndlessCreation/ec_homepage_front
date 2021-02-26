import React from 'react';
import styled from 'styled-components';

const IntroText=styled.div
`

@media screen and (min-width:1280px)
{
  font-family: NanumSquareBold;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
}
@media screen and (min-width:768px) and (max-width:1279px){
    font-family: NanumSquareRegular;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
}

@media screen and (max-width:767px){
    font-family: NanumSquareRegular;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
}
`;

function ForIntroText({children}){
    return <IntroText>{children}</IntroText>;
}

export default ForIntroText;