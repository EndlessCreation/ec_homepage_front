import React from 'react';
import styled from 'styled-components';
import ManagerInfo from '../atoms/ManagerInfo';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Box = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
`

function Manager(){
    return(
        <div data-aos="fade-up"
     data-aos-duration="3000">
        <Box>
            <ManagerInfo />
        </Box>
        </div>
    )
}

export default Manager; 