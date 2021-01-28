import React from 'react';
import styled from 'styled-components';
import {useGradState} from '../states/GradState';
import GradInfo from './GradInfo';

const Circle = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;

justify-content: space-between;
margin-bottom: 16px;
`

function GradCircle(){
    const grads = useGradState();
    return(
        <Circle>
        {grads.map(grad => (
           <GradInfo
                key = {grad.id}
                id = {grad.id}
                name = {grad.name}
                position = {grad.position}
                grade = {grad.grade}
                company = {grad.company}               
                /> 
        ))}
    </Circle>
        
    )
}

export default GradCircle;