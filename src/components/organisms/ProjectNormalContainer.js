import React from 'react';
import styled from 'styled-components';
import TextBox from '../molecules/CommonSubTextContents';
import ProjectContentBox from '../molecules/ProjectNormalContents';

const Container=styled.div`

@media screen and (min-width:1280px)
{
    max-width:1200px;
    margin:0 auto;
    height:1038px;
    padding-bottom:160px;
}

@media screen and (min-width:768px) and (max-width:1279px){
    max-width:608px;
    margin:0 auto;
    height: 750px;
    padding-bottom:120px;
}

@media screen and (max-width:767px){
    max-width:304px;
    margin:0 auto;
    height:719px;
    padding-bottom:100px;
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

export default React.memo(ProjectContainer);