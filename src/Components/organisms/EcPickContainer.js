import React from 'react';
import styled from 'styled-components';
import TextBox from '../molecules/TextBox';
import EcPickContentBox from '../molecules/EcPickContentBox';

const Container=styled.div`
@media screen and (min-width:1280px)
{
    max-width:1280px;
    margin:0 auto;
    height:71x8px;
}

@media screen and (min-width:768px) and (max-width:1279px){
    max-width:640px;
    margin:0 auto;
    height: 774px;
}

@media screen and (max-width:767px){
    max-width:320px;
    margin:0 auto;
    height:697px;

}
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