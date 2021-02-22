import React from 'react';
import styled from 'styled-components';
import Size from '../../../Size';
import MemberGradSlide from '../molecules/MemberGradSlide';
import {MemberProvider} from '../../../Context/MemberContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const GradBox = styled.div`
width: 848px;
padding-bottom: 130px;
padding-left: 22.166666667%;


@media screen and ${Size.device.tablet}
{
    width: 608px;
    padding-bottom: 120px;
    padding-left: 0%;
    
    margin: 0 auto;
    
}

@media screen and ${Size.device.moblie}
{
    width: 304px;

    padding-left: 0%;
    padding-bottom: 101px;
    margin: 0 auto;
    
}

`

function MemberGraduate(){
    return(
        <MemberProvider>
        <GradBox>
            <MemberGradSlide/>
        </GradBox>
        </MemberProvider>
    )
}

export default MemberGraduate;
