import React from 'react';
import styled from 'styled-components';
import TextBox from '../molecules/TextBox';
import ProjectContentBox from '../molecules/ProjectContentBox';

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
    height:1038px;
}

@media screen and (min-width:768px) and (max-width:1279px){
    max-width:640px;
    margin:0 auto;
    height: 750px;
}

@media screen and (max-width:767px){
    max-width:320px;
    margin:0 auto;
    height:719px;
}
>>>>>>> 587162f714bc9f29704b543a3352e4d42395d674
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