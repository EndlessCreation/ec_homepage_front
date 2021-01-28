import React from 'react';
import styled from 'styled-components';
import {useManaState} from '../states/ManaState';
import ManagerInfo from './ManagerInfo';

const Box = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;

justify-content: space-between;
margin-bottom: 16px;
`

function Manager(){
    const manas = useManaState();
    return(
        <Box>
        {manas.map(mana => (
           <ManagerInfo
                key = {mana.id}
                id = {mana.id}
                name = {mana.name}
                grad = {mana.grad}
                position = {mana.position}

                /> 
        ))}
        </Box>
    )
}

export default Manager; 