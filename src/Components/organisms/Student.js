<<<<<<< HEAD
import React from 'react';
import styled from 'styled-components';
import StudInfo from '../atoms/StudInfo';
import Size from '../../Size';

const StudBox = styled.div`
width: 848px;
padding-top: 72px;
padding-left: 22.166666667%;


@media screen and ${Size.device.tablet}{

  width: 608px;
  padding-top: 56px;
  padding-left: 0%;

}

@media screen and ${Size.device.moblie}{

  width: 303px;
  
  padding-top: 54px;
  padding-left: 0%;

}
`

function Student(){
    return(
    <StudBox>
          <StudInfo/>
    </StudBox>
    )
=======
import React from "react";
import styled from "styled-components";

import StuCircle from "../atoms/StuCircle";
import { StudProvider } from "../../Context/StudProvider";
import Size from "../../Size";

const StudBox = styled.div`
  width: 848px;
  padding-top: 72px;
  padding-left: 22.166666667%;
  @media screen and ${Size.device.tablet} {
    width: 608px;
    padding-top: 56px;
    padding-left: 0%;
  }
  @media screen and ${Size.device.moblie} {
    width: 303px;

    padding-top: 54px;
    padding-left: 0%;
  }
`;

function Student() {
  return (
    <StudBox>
      <StudProvider>
        <StuCircle />
      </StudProvider>
    </StudBox>
  );
>>>>>>> 587162f714bc9f29704b543a3352e4d42395d674
}

export default Student;
