import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const AboutEcMainBlock = styled.div`
  width: 674px;
  height: 142px;
  padding-left: 22.16%;
  .aboutec-text1 {
    display: inline-block;
    font-size: 36px;
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
    width: 76%;
    height: auto;
    display: inline-block;
    padding-left: 0;
    margin-top: 85px;
    box-sizing: border-box;
    .aboutec-text1 {
      font-size: 24px;
      line-height: 35px;
    }
    .aboutec-text2 {
      font-size: 18px;
      line-height: 32px;
    }
    @media screen and (max-width: 767px) {
      width: 100%;
      margin-top: 42px;
    }
    .aboutec-text1 {
      font-size: 23px;
      line-height: 31px;
    }
    .aboutec-text2 {
      font-size: 16px;
      line-height: 28px;
    }
  }
`;

function MainAboutEcSubText() {
  const isPc = useMediaQuery({
    query: "(min-width:1280px)",
  });
  return (
    <AboutEcMainBlock>
      <span className="aboutec-text1">Endless Creation</span>
      <span className="aboutec-text2">
        &nbsp; 은 사람과 컴퓨터를 사랑하는 동아리로, {isPc && <br />}개발하는
        재미와 함께 성장하는 즐거움을 알아갈 수 있는 다양한 활동을 준비하고
        있습니다.
      </span>
    </AboutEcMainBlock>
  );
}

export default React.memo(MainAboutEcSubText);
