import React from 'react';
import styled from 'styled-components';
import Project from '../atoms/TextForMiddle';
import ProjectData from '../Data/ProjectData'; 

const Block=styled.div`
    display:flex;
    height:47%;
    width:100%;
`

const EmptyBlock=styled.div`
    width:13%;
    height:100%;
`

const ProjectBlock = styled.div`
    margin-top:100px;
     height:100%;
`;

function ContentProject(){
    return (
        <Block>
            <EmptyBlock></EmptyBlock>
            <ProjectBlock>
                <Project>Project</Project>
            </ProjectBlock>
            <ProjectData></ProjectData>
        </Block>
    );
}

export default ContentProject;