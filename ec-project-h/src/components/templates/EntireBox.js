import React from 'react';
import styled from 'styled-components';
import IntroContainer from '../organisms/IntroContainer';
import EcPickContainer from '../organisms/EcPickContainer';
import ProjectContainer from '../organisms/ProjectContainer';

const Box1=styled.div`
width:100%;
height:19%;
`;

const Box2=styled.div`
background: #F2F2F2;
width:100%
height:32%
`;

const Box3=styled.div`
width:100%;
height:47%;
`

function EntireBox(){
    return(
        <>
        <Box1>
            <IntroContainer />
        </Box1>
        <Box2>
            <EcPickContainer />
        </Box2>
        <Box3>
            <ProjectContainer />
        </Box3>
        </>
    );
}

export default EntireBox;
