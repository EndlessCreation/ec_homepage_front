import React from 'react';
import styled from 'styled-components';
import Size from '../../Size';

const GradInfoBlock = styled.div`
width: 128px;
height: 128px;
opacity: 1;
margin-bottom: 16px;

border-radius: 54px;
background-color: #ffffff;

/* pc버전 : hover */
&:hover {
  background: var(--unnamed-color-b0b0b0) 0% 0% no-repeat padding-box;
  background: #B0B0B0 0% 0% no-repeat padding-box;
}
@media screen and ${Size.device.tablet}
{
    width: 112px;
    height: 112px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border-radius: 54px;
    opacity: 1;
    
    /* moblie버전 : hover */
    &:active {
        background: var(--unnamed-color-b0b0b0) 0% 0% no-repeat padding-box;
        background: #B0B0B0 0% 0% no-repeat padding-box;
    }    
}

@media screen and ${Size.device.moblie}
{
    width: 67px;
    height: 67px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border-radius: 54px;
    opacity: 1;
    
    /* moblie버전 : hover */
    &:active {
        background: var(--unnamed-color-b0b0b0) 0% 0% no-repeat padding-box;
        background: #B0B0B0 0% 0% no-repeat padding-box;
    }    
}
`;

function GradCircle(){
    return <GradInfoBlock></GradInfoBlock>;
}

export default GradCircle;