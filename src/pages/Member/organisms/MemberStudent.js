import React from 'react';
import styled from 'styled-components';
import MemberStudSlide from '../molecules/MemberStudSlide';
import Size from '../../../Size';
import {MemberProvider} from '../../../context/MemberContext';

const StudBox = styled.div`
width: 848px;
padding-left: 22.166666667%;
padding-bottom: 130px;

@media screen and ${Size.device.tablet}{

  width: 608px;
  padding-left: 0%;
  padding-bottom: 100px;

}

@media screen and ${Size.device.moblie}{

  width: 303px;
  padding-left: 0%;
  padding-bottom: 80px;
}
`

function MemberStudent(){
    return(
    <MemberProvider>
    <StudBox>
          <MemberStudSlide/>
    </StudBox>
    </MemberProvider>
    )
}

export default MemberStudent;
