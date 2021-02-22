import React from "react";
import IntroContainer from "../organisms/CommonHeader";
import EcPickContainer from "../organisms/ProjectEcPickContainer";
import ProjectContainer from "../organisms/ProjectNormalContainer";
import WhiteContainer from "../../Member/Template/WhiteContainer";
import GreyContainer from "../../Member/Template/GreyContainer";



function EntireBox() {
  return (
    <>
    <IntroContainer main="Project" intro="선배님들이 했던 프로젝트들이에요!" intro2="너무 많아서 몇 가지만 골라봤어요 :)"/>
    <GreyContainer>
      <EcPickContainer />
    </GreyContainer>
    <WhiteContainer>
      <ProjectContainer />
    </WhiteContainer>
    </>
  );
}

export default EntireBox;
