import React from "react";
import styled from "styled-components";

const AboutEcBlock = styled.div`
  width: 100%;
  height: 1299px;
  margin: 0;
  padding: 0;
  background-color: #f2f2f2;
`;

const AboutEcContainer = styled.div`
  max-width: 1280px;
  height: 100%;
  padding-left: 40px;
  padding-right: 40px;
  margin: 0 auto;
  box-sizing: border-box;
`;

function MainAboutEC() {
  return (
    <AboutEcBlock>
      <AboutEcContainer></AboutEcContainer>
    </AboutEcBlock>
  );
}

export default MainAboutEC;
