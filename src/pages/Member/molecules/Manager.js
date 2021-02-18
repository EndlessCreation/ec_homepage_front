import React from 'react';
import styled from 'styled-components';
import ManagerInfo from '../atoms/ManagerInfo';

const Box = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
`

function Manager(){
    return(
        <Box>
            <ManagerInfo />
        </Box>
    )
}

export default Manager; 