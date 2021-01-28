import React from 'react';
import styled from 'styled-components';

const BoxforProject=styled.div`
    width:198px;
    height:198px;
    background: var(--unnamed-color-f2f2f2) 0% 0% no-repeat padding-box;
    background: #F2F2F2 0% 0% no-repeat padding-box;
    opacity: 1;
`;

function ProjectBox(){
    return <BoxforProject></BoxforProject>
};

export default ProjectBox;