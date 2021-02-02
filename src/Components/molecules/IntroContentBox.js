import React from 'react';
import styled from 'styled-components';
import ForMainText from '../atoms/ForMainText';
import ForIntroText from '../atoms/ForIntroText';

const BlockforIntroContent=styled.div`
    padding-left: 23%;
    padding-top:134px;
    padding-bottom:130px;
`;

function IntroContentBox(){
    return(
        <BlockforIntroContent>
            <ForMainText />
            <ForIntroText />
        </BlockforIntroContent>
    );
}

export default IntroContentBox;