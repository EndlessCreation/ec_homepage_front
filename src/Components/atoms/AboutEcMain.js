import React from "react";
import styled from "styled-components";

const AboutEcMainBlock = styled.div`
  width: 100%;
  height: 142px;
  padding-left: 22.16%;
  .aboutec-text1 {
    display: inline-block;
    font-size: 36px;
    width: 281px;
    height: 54px;
    line-height: 54px;
    font-weight: bold;
    font-family: Kanit;
  }
  .aboutec-text2 {
    font-size: 18px;
    line-height: 38px;
    font-family: NanumSquareRegular;
    color: #101010;
  }
  @media screen and (max-width: 1279px) {
    width: 70%;
    display: inline-block;
    padding-left: 0;
  }
`;
function AboutEcMain() {
  return (
    <AboutEcMainBlock>
      <span className="aboutec-text1">Endless Creation</span>
      <span className="aboutec-text2">
        은 사람과 컴퓨터를 사랑하는 동아리로,
        <br />
        개발하는 재미와 함께 성장하는 즐거움을 알아갈 수 있는 다양한 활동을
        준비하고 있습니다.
      </span>
    </AboutEcMainBlock>
  );
}

export default AboutEcMain;
