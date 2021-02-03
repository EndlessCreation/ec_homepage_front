import React from 'react';
import styled from 'styled-components';
import TextBox from '../molecules/TextBox';
import EcPickContentBox from '../molecules/EcPickContentBox';

const Container=styled.div`
    max-width:1280px;
    margin:0 auto;
    height:100%;
`;

function EcPickContainer(){
    return(
        <Container>
            <TextBox>EC PICK</TextBox>
            <EcPickContentBox />
        </Container>
    );
}

export default EcPickContainer;