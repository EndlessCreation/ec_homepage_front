import React from 'react';
import styled from 'styled-components';
import Device from '../Device';
import GradCircle from '../atoms/GradCircle';
import {GradProvider} from '../states/GradState';

const GradBox = styled.div`
width: 848px;
height: 278px;

padding-top: 72px;
padding-right: 23.2291667%;
padding-left: 32.6041667%;


margin: 0 auto;

@media only screen and ${Device.device.tablet}
{
    width: 608px;
    height: 236px;

    padding-top: 56px;
    padding-right: 10.41666666666666666%;
    padding-left: 10.41666666666666666%;
    
    margin: 0 auto;
    
}

@media only screen and ${Device.device.moblie}
{
    width: 304px;
    height: 304px;

    padding-top: 56px;
    padding-right: 8.75%;
    padding-left: 8.75%;
    
    margin: 0 auto;
    
}

`

function Graduate(){
    return(
        <GradBox>
            <GradProvider>
                <GradCircle/>
            </GradProvider>
        </GradBox>
    )
}

export default Graduate;