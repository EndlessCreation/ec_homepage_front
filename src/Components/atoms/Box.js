import React from 'react';
import styled from 'styled-components';

const Block=styled.div`
    width:100%;
`;

function Box({height,color}){
    return(
        <Block style={{height,color}}/>
    );
}

export default Box;