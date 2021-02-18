import React from 'react';
import styled from 'styled-components';
import IntroContentBox from '../molecules/IntroContentBox';

const Container=styled.div`

@media screen and (min-width:1280px)
{
    max-width:1200px;
    margin:0 auto;
    height:553px;
}

@media screen and (min-width:768px) and (max-width:1279px){
    max-width:608px;
    margin:0 auto;
    height: 386px;
}

@media screen and (max-width:767px){
    max-width:304px;
    margin:0 auto;
    height:389px;

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