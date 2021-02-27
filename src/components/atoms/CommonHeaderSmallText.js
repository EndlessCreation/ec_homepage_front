import React from 'react';
import styled from 'styled-components';

const MainText=styled.div
` 

@media screen and (min-width:1280px)
{
    font-family: Kanit;
  font-size: 64px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.22;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
    padding-bottom:8px;
}
@media screen and (min-width:768px) and (max-width:1279px)
{
    font-family: Kanit;
    font-size: 36px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
    padding-bottom:24px;
}
@media screen and (max-width:767px)
{
    font-family: Kanit;
  font-size: 36px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
    padding-bottom:19px;
}
`;

function ForMainText({children}){
    return <MainText>{children}</MainText>;
}

export default React.memo(ForMainText);