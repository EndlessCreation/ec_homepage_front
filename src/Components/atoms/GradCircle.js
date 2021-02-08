import React from 'react';
import styled from 'styled-components';
import Size from '../../Size';

//항목의 text부분
const Text = styled.div`
position: absolute;
padding-top: 26px;
width: 128px;
height: 128px;
margin: 0 auto;
vertical-align: middle;
text-align: center;

font: var(--unnamed-font-style-normal) normal normal 16px/28px var(--unnamed-font-family-nanumsquare);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-232323);
font: normal normal normal 16px/28px NanumSquare;
letter-spacing: 0px;
color: #232323;
opacity: 1;

display: none;

@media screen and ${Size.device.tablet}
{
    position: absolute;
vertical-align: middle;
  padding-top: 22px;
  width: 112px;
  height: 112px;
margin: 0 auto;

font-family: NanumSquareR;
font-size: 0.875rem;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: 1.57;
letter-spacing: normal;
text-align: center;
color: #232323;

display: none;
}

@media screen and ${Size.device.moblie}
{
position: absolute;
vertical-align: middle;
  padding-top: 12px;
  width: 67px;
  height: 67px;
margin: 0 auto;

font: var(--unnamed-font-style-normal) normal normal 16px/28px var(--unnamed-font-family-nanumsquare);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-232323);
text-align: center;
font: normal normal normal 8px/15px NanumSquare;
color: #232323;
opacity: 1;

display: none;
}

`;

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
  ${Text}{
    display: initial;
}
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
        ${Text}{
            display: initial;
        }
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
        ${Text}{
            display: initial;
        }
    }    
}
`;

function GradCircle({grad}){
    return <GradInfoBlock><Text>{grad.name} {grad.grade}</Text><br /><Text>{grad.position}</Text><br/><Text>{grad.company}</Text></GradInfoBlock>;
}

export default GradCircle;