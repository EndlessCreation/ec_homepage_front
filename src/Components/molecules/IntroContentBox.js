import React from 'react';
import styled from 'styled-components';
import ForMainText from '../atoms/ForMainText';
import ForIntroText from '../atoms/ForIntroText';

const BlockforIntroContent=styled.div`
<<<<<<< HEAD
    padding-left: 23%;
    padding-top:134px;
    padding-bottom:130px;
=======
@media screen and (min-width:1280px){
    padding-left: 23%;
    padding-top:254px;
    padding-bottom:130px;
}

@media screen and (min-width:768px) and (max-width:1279px){
    padding-left:2.5%;
    padding-top:180px;
    padding-bottom:80px;
}
@media screen and (max-width:767px){
    padding-left:2.5%;
    padding-top:196px;
    padding-bottom:72px;
}
>>>>>>> 587162f714bc9f29704b543a3352e4d42395d674
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