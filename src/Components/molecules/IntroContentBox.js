import React from 'react';
import styled from 'styled-components';
import ForMainText from '../atoms/ForMainText';
import ForIntroText from '../atoms/ForIntroText';

const BlockforIntroContent=styled.div`
@media screen and (min-width:1280px){
    padding-left: 23%;
    padding-top:254px;
    padding-bottom:130px;
}
<<<<<<< HEAD

@media screen and (min-width:640px) and (max-width:1279px){
    padding-left:2.5%;
    padding-top:96px;
    padding-bottom:80px;
}

@media screen and (max-width:639px){
    padding-left:2.5%;
    padding-top:124px;
=======
@media screen and (min-width:768px) and (max-width:1279px){
    padding-left:2.5%;
    padding-top:180px;
    padding-bottom:80px;
}
@media screen and (max-width:767px){
    padding-left:2.5%;
    padding-top:196px;
>>>>>>> develop
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