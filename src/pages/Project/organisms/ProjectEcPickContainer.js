import React from "react";
import styled from "styled-components";
import TextBox from "../molecules/CommonSubTextContents";
import EcPickContentBox from "../../Main/organisms/MainProjectContents";

const Container = styled.div`
  @media screen and (min-width: 1280px) {
    width: 1200px;
    margin: 0 auto;
    height: 718px;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 608px;
    margin: 0 auto;
  }

  @media screen and (max-width: 767px) {
    width: 304px;
    margin: 0 auto;
  }
`;

function EcPickContainer() {
  return (
    <Container>
      <TextBox>EC PICK</TextBox>
      <EcPickContentBox />
    </Container>
  );
}

export default EcPickContainer;
