import React from 'react';
import styled from 'styled-components';

const MainText=styled.div
`  
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

`;

function ForMainText(){
    return <MainText>Project</MainText>;
}

export default ForMainText;