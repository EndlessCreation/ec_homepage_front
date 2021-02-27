import React from 'react';
import styled from "styled-components";

const Top = styled.div`
  width: 100%;
  margin: 0 auto;
  background: ${props=>props.color === "white" ? "#ffffff" : "#f2f2f2"};
  opacity: 1;
`;

const Box = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding-left: 40px;
  padding-right: 40px;
  box-sizing: border-box;
  opacity: 1;
  @media screen and (min-width:768px) and (max-width:1279px) {
    max-width: 640px;
    padding-left: 16px;
    padding-right: 16px;
    margin: 0 auto;
  }
  @media screen and (max-width:767px) {
    max-width: 320px;
    padding-left: 8px;
    padding-right: 8px;
    margin: 0 auto;
  }
`;

function CommonContainer({children, color}){
    return(
        <Top color={color}>
            <Box>
                {children}
            </Box>
        </Top>
    )
}

export default CommonContainer;
