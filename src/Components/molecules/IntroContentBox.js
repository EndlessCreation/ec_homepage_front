import React from 'react';
import styled from 'styled-components';
import ForMainText from '../atoms/ForMainText';
import ForIntroText from '../atoms/ForIntroText';

const BlockforIntroContent=styled.div`
@media screen and (min-width:1280px){
    padding-left: 263px;
    padding-top:254px;
    padding-bottom:130px;
}

@media screen and (min-width:768px) and (max-width:1279px){
    padding-top:180px;
    padding-bottom:80px;
}
@media screen and (max-width:767px){
    padding-top:196px;
    padding-bottom:72px;
}
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