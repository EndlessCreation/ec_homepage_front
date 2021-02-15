<<<<<<< HEAD
import React from 'react';
import styled from 'styled-components';
import Size from '../../Size';
import GradInfo from '../atoms/GradInfo';

const GradBox = styled.div`
width: 848px;

padding-top: 72px;
padding-left: 22.166666667%;


@media screen and ${Size.device.tablet}
{
    width: 608px;
    padding-top: 56px;
    padding-left: 0%;
    
    margin: 0 auto;
    
}

@media screen and ${Size.device.moblie}
{
    width: 304px;

    padding-top: 54px;
    padding-left: 0%;
    
    margin: 0 auto;
    
}

`

function Graduate(){
    return(
        <GradBox>
            <GradInfo/>
        </GradBox>
    )
}

export default Graduate;
=======
import React from "react";
import styled from "styled-components";
import Size from "../../Size";
import GradCircle from "../atoms/GradCircle";
import { GradProvider } from "../../Context/GradProvider";

const GradBox = styled.div`
  width: 848px;
  padding-top: 72px;
  padding-left: 22.166666667%;
  @media screen and ${Size.device.tablet} {
    width: 608px;
    padding-top: 56px;
    padding-left: 0%;

    margin: 0 auto;
  }
  @media screen and ${Size.device.moblie} {
    width: 304px;
    padding-top: 54px;
    padding-left: 0%;

    margin: 0 auto;
  }
`;

function Graduate() {
  return (
    <GradBox>
      <GradProvider>
        <GradCircle />
      </GradProvider>
    </GradBox>
  );
}

export default Graduate;
>>>>>>> 587162f714bc9f29704b543a3352e4d42395d674
