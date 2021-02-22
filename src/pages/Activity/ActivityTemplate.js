import React  from 'react';
import IntroContainer from "../Project/organisms/CommonHeader";

import GreyContainer from "../Member/Template/GreyContainer";
import WhiteContainer from "../Member/Template/WhiteContainer";

import Month from "./ActivityMonth";
import Photo from "./ActivityPhoto";

function ActivityTemplate(){
    return(
        <>
        <IntroContainer main="Activity" intro='2021년 Endless Creation 에서는' intro2='아래와 같은 활동을 준비하고 있어요!'></IntroContainer>
        <GreyContainer>
            <Month/>
        </GreyContainer>

        <WhiteContainer>
            <Photo/>
        </WhiteContainer>
        </>

    );

}

export default ActivityTemplate;
