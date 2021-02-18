import React from "react";
import styled from "styled-components";
import IntroContainer from "./organisms/IntroContainer";
import EcPickContainer from "./organisms/EcPickContainer";
import ProjectContainer from "./organisms/ProjectContainer";



const Box2 = styled.div`
  background: #f2f2f2;
`;



function EntireBox() {
  return (
    <>
        <IntroContainer />
        <Box2>
        <EcPickContainer/>
        </Box2>
        <ProjectContainer />
    </>
  );
}

export default EntireBox;
