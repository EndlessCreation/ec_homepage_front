import React from 'react';
import styled from 'styled-components';

import StuCircle from '../atoms/StuCircle';
import {StudProvider} from '../states/StudState';
import Device from '../Device';

const StudBox = styled.div`
width: 848px;
height: 500px;

padding-top: 72px;
padding-right: 23.2291667%;
padding-left: 32.6041667%;

margin: 0 auto;
@media only screen and ${Device.device.tablet}{

  width: 608px;
  height: 296px;
  padding-top: 56px;
  padding-right: 80px;
  padding-left: 80px;

  margin: 0 auto;
}

@media only screen and ${Device.device.moblie}{

  width: 303px;
  height: 408px;
  
  padding-top: 56px;
  padding-right: 28px;
  padding-left: 28px;

  margin: 0 auto;
}
`

function Student(){
    return(
    <StudBox>
        <StudProvider>
          <StuCircle/>
        </StudProvider>
    </StudBox>
    )
}

export default Student;
