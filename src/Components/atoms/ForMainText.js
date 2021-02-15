import React from 'react';
import styled from 'styled-components';

const MainText=styled.div
<<<<<<< HEAD
`  
font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-64)/var(--unnamed-line-spacing-78) var(--unnamed-font-family-kanit);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-101010);
text-align: left;
font: normal normal bold 64px/78px Kanit;
letter-spacing: 0px;
color: #101010;
opacity: 1;
=======
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
>>>>>>> 587162f714bc9f29704b543a3352e4d42395d674
`;

function ForMainText(){
    return <MainText>Project</MainText>;
}

export default ForMainText;