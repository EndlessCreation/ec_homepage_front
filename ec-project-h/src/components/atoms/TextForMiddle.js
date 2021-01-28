import React from 'react';
import styled from 'styled-components'

const Text =styled.div`
    font: normal normal bold 32px/48px Kanit;
    letter-spacing: 0px;
    color: #101010;
    opacity: 1;
`;

function TextForMiddle({children}){
    return <Text>{children}</Text>;
}

export default TextForMiddle;