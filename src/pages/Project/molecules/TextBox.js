import React from 'react';
import styled from 'styled-components';
import Text from '../atoms/ForText';

const TextBlock=styled.div`
    padding-left:3%;
    padding-top:100px;
    padding-bottom:72px;
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
