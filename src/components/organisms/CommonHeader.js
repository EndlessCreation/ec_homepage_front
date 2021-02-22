import React from "react";
import styled from "styled-components";
import ForMainText from "../atoms/CommonHeaderSmallText";
import ForIntroText from "../atoms/CommonHeaderBigText";

const Container = styled.div`
  box-sizing: border-box;

  @media screen and (min-width: 1280px) {
    width: 1200px;
    margin: 0 auto;

    padding-left: 263px;
    padding-top: 254px;
    padding-bottom: 130px;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 608px;
    margin: 0 auto;
    height: 386px;
    padding-top: 180px;
    padding-bottom: 80px;
  }

  @media screen and (max-width: 767px) {
    width: 304px;
    margin: 0 auto;
    height: 389px;
    padding-top: 196px;
    padding-bottom: 72px;
  }
`;

function IntroContainer({ main, intro, intro2 }) {
  return (
    <Container>
      <ForMainText>{main}</ForMainText>
      <ForIntroText>
        {intro} <br></br>
        {intro2}
      </ForIntroText>
    </Container>
  );
}

export default IntroContainer;
