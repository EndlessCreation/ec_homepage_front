import React from 'react';
import styled from 'styled-components';
import IntroContentBox from '../molecules/IntroContentBox';

const Container=styled.div`
<<<<<<< HEAD
    max-width:1280px;
    margin:0 auto;
    height:100%;
=======

@media screen and (min-width:1280px)
{
    max-width:1280px;
    margin:0 auto;
    height:553px;
}

@media screen and (min-width:768px) and (max-width:1279px){
    max-width:640px;
    margin:0 auto;
    height: 386px;
}

@media screen and (max-width:767px){
    max-width:320px;
    margin:0 auto;
    height:389px;

}
>>>>>>> 587162f714bc9f29704b543a3352e4d42395d674
`;

function IntroContainer(){
    return(
        <Container>
            <IntroContentBox />
        </Container>
    );
}

export default IntroContainer;