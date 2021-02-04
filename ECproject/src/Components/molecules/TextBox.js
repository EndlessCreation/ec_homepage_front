import React from 'react';
import styled from 'styled-components';
import Text from '../atoms/ForText';

const TextBlock=styled.div`
@media screen and (min-width:1280px){
    padding-left:3%;
    padding-top:100px;
    padding-bottom:72px;
}

@media screen and (min-width:640px) and (max-width:1279px){
    padding-left:2.5%;
    padding-top:80px;
    padding-bottom:56px;   
}

@media screen and (max-width:639px){
    padding-left:2.5%;
    padding-top:60px;
    padding-botoom:54px;
}
`;

function TextBox({children})
{
    return(
        <TextBlock>
            <Text>{children}</Text>
        </TextBlock>
        
    );
}

export default TextBox;
