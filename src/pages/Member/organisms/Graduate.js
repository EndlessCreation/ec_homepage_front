import React from 'react';
import styled from 'styled-components';
import Size from '../../../Size';
import GradSlide from '../molecules/GradSlide';
import {MemberProvider} from '../../../context/MemberContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const GradBox = styled.div`
width: 848px;

padding-top: 72px;
padding-left: 22.166666667%;


@media screen and ${Size.device.tablet}
{
    width: 608px;
    padding-top: 56px;
    padding-left: 0%;
    
    margin: 0 auto;
    
}

@media screen and ${Size.device.moblie}
{
    width: 304px;

    padding-top: 54px;
    padding-left: 0%;
    
    margin: 0 auto;
    
}

`

function Graduate(){
    return(
        <MemberProvider>
        <GradBox>
            <GradSlide/>
        </GradBox>
        </MemberProvider>
    )
}

export default Graduate;
