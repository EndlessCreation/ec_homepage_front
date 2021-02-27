import React from "react";
import IntroContainer from "../organisms/CommonHeader";
import EcPickContainer from "../organisms/ProjectEcPickContainer";
import ProjectContainer from "../organisms/ProjectNormalContainer";
import Container from "../organisms/CommonContainer";

function EntireBox() {
  return (
    <>
      <IntroContainer
        main="Project"
        intro="선배님들이 했던 프로젝트들이에요!"
        intro2="너무 많아서 몇 가지만 골라봤어요 :)"
        Url="images/ProjectHeader.jpeg"
      />
      <Container>
        <EcPickContainer />
      </Container>
      <Container color="white">
        <ProjectContainer />
      </Container>
    </>
  );
}

export default React.memo(EntireBox);
