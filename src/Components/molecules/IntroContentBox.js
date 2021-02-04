import React from 'react';
import styled from 'styled-components';
import ForMainText from '../atoms/ForMainText';
import ForIntroText from '../atoms/ForIntroText';

const BlockforIntroContent=styled.div`
@media screen and (min-width:1280px){
    padding-left: 23%;
    padding-top:134px;
    padding-bottom:130px;
}

@media screen and (min-width:640px) and (max-width:1279px){
    padding-left:2.5%;
    padding-top:96px;
    padding-bottom:80px;
}

@media screen and (max-width:639px){
    padding-left:2.5%;
    padding-top:124px;
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