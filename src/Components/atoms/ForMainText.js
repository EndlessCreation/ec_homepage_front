import React from 'react';
import styled from 'styled-components';

const MainText=styled.div
`  
<<<<<<< HEAD
@media screen and (min-width:1280px){
text-align: left;
font: normal normal bold 64px/78px Kanit;
letter-spacing: 0px;
color: #101010;
opacity: 1;
}

@media screen and (max-width:1279px){
    text-align:left;
    font: normal normal bold 36px/52px Kanit;
    letter-spacing:0px;
    color: #101010;
    opacity: 1;
}

=======
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
  color: #101010;
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
    color: #101010;
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
  color: #101010;
    padding-bottom:19px;
}
>>>>>>> develop
`;

function ForMainText(){
    return <MainText>Project</MainText>;
}

export default ForMainText;