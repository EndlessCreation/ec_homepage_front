import React from 'react';
import styled from 'styled-components';
import TextBox from '../molecules/TextBox';
import ProjectContentBox from '../molecules/ProjectContentBox';

const Container=styled.div`
    max-width:1280px;
    margin:0 auto;
    height:100%;
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