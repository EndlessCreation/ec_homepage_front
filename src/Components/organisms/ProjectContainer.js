import React from 'react';
import styled from 'styled-components';
import TextBox from '../molecules/TextBox';
import ProjectContentBox from '../molecules/ProjectContentBox';

const Container=styled.div`
@media screen and (min-width:1280px)
{
    max-width:1200px;
    margin:0 auto;
    height:1038px;
}

@media screen and (min-width:768px) and (max-width:1279px){
    max-width:608px;
    margin:0 auto;
    height: 750px;
}

@media screen and (max-width:767px){
    max-width:304px;
    margin:0 auto;
    height:719px;
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