import React from 'react';
import styled from 'styled-components';
import Text from '../atoms/ForText';

const TextBlock=styled.div`
    @media screen and (min-width:1280px)
    {
        padding-top:100px;
        padding-bottom:72px;
    }
    @media screen and (min-width:768px) and (max-width:1279px){
        padding-top:80px;
        padding-bottom:56px;
    }
    @media screen and (max-width:767px){
        padding-top:60px;
        padding-bottom:54px;
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
