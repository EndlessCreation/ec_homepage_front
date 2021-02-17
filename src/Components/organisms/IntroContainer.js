import React from 'react';
import styled from 'styled-components';
import IntroContentBox from '../molecules/IntroContentBox';

const Container=styled.div`
    max-width:1280px;
    margin:0 auto;
    height:100%;
`;

function IntroContainer(){
    return(
        <Container>
            <IntroContentBox />
        </Container>
    );
}

export default IntroContainer;