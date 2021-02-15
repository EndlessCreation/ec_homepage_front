import React from "react";
import styled from "styled-components";

<<<<<<< HEAD
const MainActivityContainer = styled.div`
  max-width: 1280px;
  height: 683px;
  margin: 0 auto;
  padding-right: 40px;
  padding-left: 40px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 121fr 146fr 349fr 498fr 86fr;
  grid-template-rows: 220fr 463fr;

  .MainActivityLeft {
    width: 121px;
    height: 48px;
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
    font-size: 32px;
    font-family: Kanit;
    font-weight: bold;
    line-height: 48px;
    margin-top: 100px;
  }
  .MainToActivity {
    display: block;
    text-decoration: none;
    font-size: 16px;
    font-family: NanumSquareR;
    line-height: 18px;
    color: #afafaf;
    margin-top: 13px;
  }
  .MainActivityTop {
    grid-column: 3 / span 1;
    grid-row: 1 / span 1;
    width: 267px;
    height: 20px;
    font-family: NanumSquareR;
    font-size: 18px;
    line-height: 34px;
    color: #101010;
    margin-top: 113px;
  }
  .MainActivityMain {
    grid-column: 3 / span 1;
    grid-row: 2 / span 1;
    display: flex;
    justify-content: flex-start;
  }
  .MainActivityText1 {
    width: 110px;
    height: auto;
    margin-right: 54px;
  }
  .Text1Title {
    width: 82px;
    height: 23px;
    font-family: NanumSquareEB;
    font-size: 21px;
    line-height: 24px;
  }
  .Text1Title:after {
    content: "";
    display: block;
    margin-top: 16px;
    border-bottom: 2px solid #232323;
    width: 72px;
    background-color: #232323;
  }
  .MainActivityText2 {
    width: 110px;
    height: auto;
  }
  .MainActivityText1 :nth-child(2) {
    font-family: NanumSquareR;
    width: 110px;
    font-size: 16px;
    line-height: 28px;
    margin-top: 44px;
  }
  .MainActivityText2 {
    width: 110px;
    height: auto;
    margin-right: 75px;
  }
  .Text2Title {
    width: 101px;
    height: 25px;
    font-family: NanumSquareEB;
    font-size: 21px;
    line-height: 24px;
  }
  .Text2Title:after {
    content: "";
    display: block;
    margin-top: 16px;
    border-bottom: 2px solid #232323;
    width: 72px;
    background-color: #232323;
  }
  .MainActivityText2 :nth-child(2) {
    font-family: NanumSquareR;
    width: 110px;
    font-size: 16px;
    line-height: 28px;
    margin-top: 44px;
  }
  .MainActivityPhoto {
    display: inline-block;
    grid-column: 4 / span 1;
    grid-row: 1 / -1;
    width: 498px;
    height: auto;
    overflow: scroll;
  }
  .MainActivityPhoto1 {
    margin-top: 220px;
    width: 100%;
    height: 372px;
    background-color: #dddddd;
  }
  .MainActivityPhoto2 {
    margin-top: 32px;
    width: 100%;
    height: 372px;
    background-color: #aaaaaa;
  }
  .MainActivityPhoto3 {
    margin-top: 32px;
    width: 100%;
    height: 372px;
    background-color: #aaaaaa;
  }
`;

function MainActivity() {
  return (
    <MainActivityContainer>
      <div className="MainActivityLeft">
        Activity
        <a href="#" className="MainToActivity">
          View Detail -
        </a>
      </div>
      <div className="MainActivityTop">EC에 오면 이런 활동을 할 수 있어요!</div>
      <div className="MainActivityMain">
        <div className="MainActivityText1">
          <div className="Text1Title">잘 하는데</div>
          <div>
            신입생 스터디
            <br /> 희망스터디 개설 <br />
            재학생 세미나 <br />
            졸업생 세미나
            <br />
            EC 어드벤스 <br />
            팀별 공모전 <br />
            개발 컨퍼런스
          </div>
        </div>
        <div className="MainActivityText2">
          <div className="Text2Title">잘 놀기까지</div>
          <div>
            신입생 환영회 <br /> 봄소풍 및 M.T.
            <br /> 스승의 날<br /> 창립기념일 <br />
            동아리 회식 <br />
            겨울 M.T.
            <br /> 매달 생일 챙겨줌
          </div>
        </div>
      </div>

      <div className="MainActivityPhoto">
        <div className="MainActivityPhoto1"> </div>
        <div className="MainActivityPhoto2"> </div>
        <div className="MainActivityPhoto3"> </div>
      </div>
    </MainActivityContainer>
=======
import ActivityTextBox from "../../Components/organisms/ActivityTextBox";
import ActivityContents from "../../Components/organisms/ActivityContents";
const ActivityBlock = styled.div`
  width: 100%;
  height: 683px;
  margin: 0;
  padding: 0;
  background-color: #ffffff;
  @media screen and (max-width: 1279px) {
    height: 944px;
  }
  @media screen and (max-width: 767px) {
    height: 871px;
  }
`;

const ActivityContainer = styled.div`
  max-width: 1280px;
  height: 100%;
  padding-left: 40px;
  padding-right: 40px;
  margin: 0 auto;
  box-sizing: border-box;
  @media screen and (max-width: 1279px) {
    max-width: 640px;
    padding-left: 16px;
    padding-right: 16px;
  }
  @media screen and (max-width: 767px) {
    max-width: 320px;
    padding-left: 8px;
    padding-right: 8px;
  }
`;
function MainActivity() {
  return (
    <ActivityBlock>
      <ActivityContainer>
        <ActivityTextBox />
        <ActivityContents />
      </ActivityContainer>
    </ActivityBlock>
>>>>>>> 587162f714bc9f29704b543a3352e4d42395d674
  );
}

export default MainActivity;
