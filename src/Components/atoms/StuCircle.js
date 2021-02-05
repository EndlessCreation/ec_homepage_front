import React from 'react';
import styled from 'styled-components';
import Size from '../../Size';

const StudInfoBlock = styled.div`
width: 156px;
height: 156px;
background: var(--unnamed-color-f2f2f2) 0% 0% no-repeat padding-box;
background: #F2F2F2 0% 0% no-repeat padding-box;
border-radius: 68px;
opacity: 1;
margin-bottom: 16px;

/* pc버전 : hover */
&:hover {
  background: var(--unnamed-color-b0b0b0) 0% 0% no-repeat padding-box;
  background: #B0B0B0 0% 0% no-repeat padding-box;
}

@media screen and ${Size.device.tablet}
{
    width: 140px;
    height: 140px;
}

@media screen and ${Size.device.moblie}
{
    width: 93px;
    height: 93px;
    margin-bottom: 12px;
}
`;

function StuCircle(){
    return <StudInfoBlock></StudInfoBlock>;
}

export default StuCircle;