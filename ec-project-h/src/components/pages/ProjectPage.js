import React from 'react';
import styled from 'styled-components';
import ContentECPick from '../templates/ContentECPick';
import ContentIntro from '../templates/ContentIntro';
import ContentProject from '../templates/ContentProject';

const MainBlock=styled.div`
    height:2189px;
`

function ProjectPage(){
    return(
        <MainBlock>
            <ContentIntro></ContentIntro>
            <ContentECPick></ContentECPick>
            <ContentProject></ContentProject>
        </MainBlock>
    );
}

export default ProjectPage;