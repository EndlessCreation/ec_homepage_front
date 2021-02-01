import React from 'react';
import styled from 'styled-components';
import Size from '../Size';

const TextBlock = styled.div`
padding-top: 34px;
padding-left: 22.166666667%;

font-family: Kanit;
font-size: 4rem;
font-weight: bold;
font-stretch: normal;
font-style: normal;
line-height: 1.22;
letter-spacing: normal;
text-align: left;
color: #101010;

@media screen and ${Size.device.tablet}
{
    padding-top: 16px;
    padding-left: 0%;

    font-family: Kanit;
    font-size: 2.25rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: normal;
    text-align: left;
    color: #101010;
}

@media screen and ${Size.device.moblie}
{
    padding-top: 64px;
    padding-left: 0%;

    font-family: Kanit;
    font-size: 2.25rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: normal;
    text-align: left;
    color: #101010;
}

`

function BigText() {
    return(
        <TextBlock>Member</TextBlock>
    )
}
export default BigText;