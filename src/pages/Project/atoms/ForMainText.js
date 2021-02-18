import React from 'react';
import styled from 'styled-components';

const MainText=styled.div
`  
font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-64)/var(--unnamed-line-spacing-78) var(--unnamed-font-family-kanit);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-101010);
text-align: left;
font: normal normal bold 64px/78px Kanit;
letter-spacing: 0px;
color: #101010;
opacity: 1;
`;

function ForMainText(){
    return <MainText>Project</MainText>;
}

export default ForMainText;