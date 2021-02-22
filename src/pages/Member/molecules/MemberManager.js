import React from 'react';
import styled from 'styled-components';
import MemberManagerInfo from '../atoms/MemberManagerInfo';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Box = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
`

function MemberManager(){
    return(
        <div data-aos="fade-up"
     data-aos-duration="3000">
        <Box>
            <MemberManagerInfo />
        </Box>
        </div>
    )
}

export default MemberManager; 