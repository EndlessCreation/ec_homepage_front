import React from 'react';
import styled from 'styled-components';
import IntroContentBox from '../molecules/IntroContentBox';

const Container=styled.div`
@media screen and (min-width:1280px){
    max-width:1280px;
    margin:0 auto;
    height:100%;
}

@media screen and (max-width:1279px){
    max-width:640px;
    margin:0 auto;
    height:100%;
}

@media screen and (max-width:639px){
    max-width:320px;
    margin:0 auto;
    height:100%;
}
`;

function IntroContainer(){
    return(
        <Container>
            <IntroContentBox />
        </Container>
    );
}

export default IntroContainer;