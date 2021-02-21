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
        <IntroContainer main="Project" intro="선배님들이 했던 프로젝트들이에요!" intro2="너무 많아서 몇 가지만 골라봤어요 :)"/>
        <Box2>
        <EcPickContainer/>
        </Box2>
        <ProjectContainer />
    </>
  );
}

export default EntireBox;
