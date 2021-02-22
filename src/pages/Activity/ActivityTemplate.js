import React  from 'react';
import IntroContainer from "../Project/organisms/CommonHeader";

import Container from "../Member/CommonContainer";

import Month from "./ActivityMonth";
import Photo from "./ActivityPhoto";

function ActivityTemplate(){
    return(
        <>
        <IntroContainer main="Activity" intro='2021년 Endless Creation 에서는' intro2='아래와 같은 활동을 준비하고 있어요!'></IntroContainer>
        <Container>
            <Month/>
        </Container>

        <Container color="white">
            <Photo/>
        </Container>
        </>

    );

}

export default ActivityTemplate;
