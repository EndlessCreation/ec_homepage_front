import React from 'react';
import styled from 'styled-components';
import Size from '../../../Size';

//항목의 text부분
const Text = styled.div`
position: absolute;
margin: 0 auto;
text-align: center;
flex: 1;

font: var(--unnamed-font-style-normal) normal normal 16px/28px var(--unnamed-font-family-nanumsquare);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-232323);
font: normal normal normal 16px/28px NanumSquare;
letter-spacing: 0px;
color: #232323;
opacity: 1;


@media screen and ${Size.device.tablet}
{
    position: absolute;

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

}

@media screen and ${Size.device.moblie}
{
position: absolute;

margin: 0 auto;

font: var(--unnamed-font-style-normal) normal normal 16px/28px var(--unnamed-font-family-nanumsquare);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-232323);
text-align: center;
font: normal normal normal 8px/15px NanumSquare;
color: #232323;
opacity: 1;

}

`;

const GradInfoBlock = styled.div`
width: 128px;
height: 128px;
opacity: 1;
margin-bottom: 16px;
display: flex;
justify-content: center;
align-items: center;

border-radius: 54px;
background-color: #ffffff;

}
@media screen and ${Size.device.tablet}
{
    width: 112px;
    height: 112px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border-radius: 48px;
    opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    
}

@media screen and ${Size.device.moblie}
{
    width: 67px;
    height: 67px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border-radius: 28px;
    opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;
      
}
`;

function GradCircle({grad}){
    return (
    <GradInfoBlock>
        <Text>
        {grad.name} {grad.grade}
        <br />
        {grad.position}
        </Text>
    </GradInfoBlock>);
}

export default GradCircle;
