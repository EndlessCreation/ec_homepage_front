import React from "react";
import styled from "styled-components";

<<<<<<< HEAD
const AboutEC_Page = styled.div`
  height: 1299px;
  background-color: #f2f2f2;
=======
import AboutEcTextBox from "../../Components/organisms/AboutEcTextBox";
import AboutEcVideo from "../../Components/atoms/AboutEcVideo";
import AboutEcContents from "../../Components/organisms/AboutEcContents";
const AboutEcBlock = styled.div`
  width: 100%;
  height: 1299px;
  margin: 0;
  padding: 0;
  background-color: #f2f2f2;
  @media screen and (max-width: 1279px) {
    height: 1001px;
  }
  @media screen and (max-width: 767px) {
    height: 1028px;
  }
>>>>>>> 587162f714bc9f29704b543a3352e4d42395d674
`;

const AboutEcContainer = styled.div`
  max-width: 1280px;
  height: 100%;
<<<<<<< HEAD
  margin: 0 auto;
  padding-left: 40px;
  padding-right: 40px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 131fr 135fr 319fr 314fr 215fr 86fr;
  grid-template-rows: 197fr 142fr 477fr 480fr;
  .AboutEcLeft {
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
    box-sizing: border-box;
    padding-top: 100px;
    padding-bottom: 49px;
    font-size: 32px;
    font-family: Kanit;
    font-weight: bold;
    line-height: 48px;
  }
  .AboutEcLeft span {
    display: inline-block;
    width: 131px;
    height: 48px;
  }
  .AboutEcMain {
    grid-column: 3 / span 2;
    grid-row: 2 / span 1;
    padding-bottom: 50px;
  }
  .AboutEcMain :first-child {
    display: inline-block;
    font-size: 36px;
    width: 281px;
    height: 54px;
    line-height: 54px;
    font-weight: bold;
    font-family: Kanit;
  }
  .AboutEcMain:nth-child(2) {
    font-size: 18px;
    line-height: 38px;
    font-family: NanumSquareRegular;
    color: #101010;
  }
  .AboutEcVideo {
    grid-column: 3 / span 3;
    grid-row: 3 / span 1;
    background-color: #dddddd;
  }
  .AboutEcGrowth {
    grid-column: 3 / span 1;
    grid-row: 4 / -1;
  }
  .AboutEcGrowth img {
    padding-top: 63px;
    padding-left: 9px;
    width: auto;
    height: auto;
  }
  .GrowthText {
    padding-top: 12px;
    font-family: Kanit;
    font-size: 24px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 35px;
  }
  .GrowthText:after {
    content: "";
    display: block;
    margin-top: 16px;
    border-bottom: 2px solid #232323;
    width: 72px;
    background-color: #232323;
  }
  .AboutEcGrowth :nth-child(3) {
    font-family: NanumSquareR;
    font-size: 18px;
    width: 220px;
    height: 54px;
    margin-top: 25px;
    line-height: 32px;
    padding-right: 100px;
  }
  .AboutEcSharing {
    grid-column: 4 / span 1;
    grid-row: 4/ -1;
  }
  .AboutEcSharing img {
    padding-top: 77.6px;
  }
  .SharingText {
    padding-top: 15px;
    font-family: Kanit;
    font-size: 24px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 35px;
  }
  .SharingText:after {
    content: "";
    display: block;
    margin-top: 16px;
    border-bottom: 2px solid #232323;
    width: 72px;
    background-color: #232323;
  }
  .AboutEcSharing :nth-child(3) {
    font-family: NanumSquareR;
    font-size: 18px;
    width: 204px;
    height: 54px;
    margin-top: 25px;
    line-height: 32px;
    padding-right: 100px;
  }
  .AboutEcCooperation {
    grid-column: 5 / span 1;
    grid-row: 4/ -1;
  }
  .AboutEcCooperation img {
    padding-top: 72px;
    width: 108.4px;
    height: 107px;
  }
  .CooperationText {
    padding-top: 16px;
    font-family: Kanit;
    font-size: 24px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 35px;
  }
  .CooperationText:after {
    content: "";
    display: block;
    margin-top: 16px;
    border-bottom: 2px solid #232323;
    width: 72px;
    background-color: #232323;
  }
  .AboutEcCooperation :nth-child(3) {
    font-family: NanumSquareR;
    font-size: 18px;
    width: 229px;
    height: 54px;
    margin-top: 25px;
    line-height: 32px;
=======
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
>>>>>>> 587162f714bc9f29704b543a3352e4d42395d674
  }
`;

function MainAboutEC() {
  return (
<<<<<<< HEAD
    <AboutEC_Page>
      <AboutEcContainer>
        <div className="AboutEcLeft">
          <span>AboutEC</span>
        </div>
        <div className="AboutEcMain">
          <span>Endless Creation</span>
          <span>
            은 사람과 컴퓨터를 사랑하는 동아리로,
            <br /> 개발하는 재미와 성장하는 즐거움을 알아갈 수 있는 다양한
            활동을 준비하고 있습니다.
          </span>
        </div>
        <div className="AboutEcVideo"></div>

        <div className="AboutEcGrowth">
          <img src="images/Growth.png" alt="Growth" />
          <div className="GrowthText">Growth</div>
          <div>EC는 동아리원 모두의 성장을 격려하고 응원합니다.</div>
        </div>
        <div className="AboutEcSharing">
          <img src="images/Sharing.png" alt="Sharing" />
          <div className="SharingText">Sharing</div>
          <div>EC는 개인의 지식과 경험을 공유하는 장이 되어줍니다.</div>
        </div>
        <div className="AboutEcCooperation">
          <img src="images/Cooperation.png" alt="Cooperation" />
          <div className="CooperationText">Cooperation</div>
          <div>EC는 더 나은 학습 환경을 위해 함께 고민하고 협력합니다.</div>
        </div>
      </AboutEcContainer>
    </AboutEC_Page>
=======
    <AboutEcBlock>
      <AboutEcContainer>
        <AboutEcTextBox />
        <AboutEcVideo />
        <AboutEcContents />
      </AboutEcContainer>
    </AboutEcBlock>
>>>>>>> 587162f714bc9f29704b543a3352e4d42395d674
  );
}

export default MainAboutEC;
