import React from 'react';
import styled from 'styled-components';
import TextBox from '../molecules/TextBox';
import ProjectContentBox from '../molecules/ProjectContentBox';

const Container=styled.div`
@media screen and (max-width:1920px){
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

function ProjectContainer(){
    return(
        <Container>
            <TextBox>Project</TextBox>
            <ProjectContentBox />
        </Container>
    );
}

export default ProjectContainer;