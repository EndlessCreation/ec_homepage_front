import React from "react";
import styled from "styled-components";

<<<<<<< HEAD
const MainHeaderTemplate = styled.div`
  .header-container {
    position: relative;
    box-sizing: border-box;
    max-width: 1280px;
    max-height: 717px;
    padding-left: 40px;
    padding-right: 40px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 266fr 499fr 113fr 322fr;
    grid-template-rows: 265fr 263fr 24fr 48fr 112fr;
  }
  .Slogan {
    grid-column: 2 / span 1;
    grid-row: 2 / span 1;
  }
  .Slogan_Main {
    font-size: 64px;
    font-family: kanit;
    font-weight: bold;
    white-space: nowrap;
  }
  .Slogan_text {
    font-size: 28px;
    font-family: NanumSquare;
  }
  .Go_FormDiv {
    grid-column: 1 / -1;
    grid-row: 4 / span 1;
    display: flex;
    justify-content: flex-end;
  }
  .Go_Form {
    width: 280px;
    height: 48px;
    margin-right: 42px;
    color: #fff;
    background-color: #232323;
    box-sizing: border-box;
    text-align: center;
    padding: 15px 0;
    font-family: NanumSquare;
    font-size: 18px;
    box-shadow: 0px 3px 6px #00000029;
    text-decoration: none;
  }
  @media screen and (max-width: 1280px) {
    .header-container {
      padding-left: 16px;
      padding-right: 16px;
    }
  }
`;

function MainHeader() {
  return (
    <MainHeaderTemplate>
      <div class="header-container">
        <div class="Slogan">
          <div class="Slogan_Main">
            <div className="SloganMainText1">성장하는 즐거움,</div>
            <div>Endless Creation</div>
          </div>
          <div class="Slogan_text">
            신입 기수 모집 중(~3/12)
            <br />
            31기 여러분들을 기다리고 있어요!
          </div>
        </div>
        <div class="Go_FormDiv">
          <a href="#" class="Go_Form">
            31기 지원
          </a>
        </div>
      </div>
    </MainHeaderTemplate>
=======
import MainBanner from "../../Components/organisms/MainBanner";
import MainBannerForm from "../../Components/atoms/MainBannerForm";
const HeaderBlock = styled.div`
  max-width: 1280px;
  height: 717px;
  margin: 0 auto;
  box-sizing: border-box;
  padding-left: 40px;
  padding-right: 40px;
  @media screen and (max-width: 1279px) {
    max-width: 640px;
    height: 689px;
    padding-left: 16px;
    padding-right: 16px;
  }
  @media screen and (max-width: 767px) {
    max-width: 320px;
    height: 605px;
    padding-left: 8px;
    padding-right: 8px;
  }
`;
const FormBlock = styled.div`
  width: 100%;
  height: auto;
  padding-bottom: 16%;
`;
function MainHeader() {
  return (
    <HeaderBlock>
      <MainBanner />
      <FormBlock>
        <MainBannerForm />
      </FormBlock>
    </HeaderBlock>
>>>>>>> 587162f714bc9f29704b543a3352e4d42395d674
  );
}

export default MainHeader;
