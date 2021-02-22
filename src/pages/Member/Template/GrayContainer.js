import React from 'react';
import Size from "../../../Size";
import styled from "styled-components";

const TopGray = styled.div`
  width: 100%;
  margin: 0 auto;
  background: var(--unnamed-color-f2f2f2) 0% 0% no-repeat padding-box;
  background: #f2f2f2 0% 0% no-repeat padding-box;
  opacity: 1;
`;

const GrayBox = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding-left: 3.125%;
  padding-right: 3.125%;
  padding-top: 100px;
  padding-bottom: 130px;
  opacity: 1;
  @media screen and ${Size.device.tablet} {
    max-width: 640px;
    padding-left: 2.5%;
    padding-right: 2.5%;
    margin: 0 auto;
    padding-top: 80px;
    padding-bottom: 100px;
  }
  @media screen and ${Size.device.moblie} {
    max-width: 320px;
    padding-left: 2.5%;
    padding-right: 2.5%;
    margin: 0 auto;
    padding-top: 60px;
    padding-bottom: 80px;
  }
`;

function GrayContainer({children}){
    return(
        <TopGray>
            <GrayBox>
                {children}
            </GrayBox>
        </TopGray>
    )
}

export default GrayContainer;