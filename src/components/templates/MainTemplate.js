import React from "react";
import styled from "styled-components";
//Main Header import
import MainHeader from "./MainHeader";
//common Template
import CommonContainer from "../organisms/CommonContainer";

//About Ec Import
import AboutEcTextBox from "../organisms/MainAboutEcTextBox";
import AboutEcVideo from "../atoms/MainAboutEcVideo";
import AboutEcContents from "../organisms/MainAboutEcContents";

//MainActivity Import
import ActivityTextBox from "../organisms/MainActivityTextBox";
import ActivityContents from "../organisms/MainActivityContents";
import ActivityPhoto from "../molecules/MainActivityPhoto";

//MainProject Import
import ProjectTextBox from "../organisms/MainProjectTextBox";
import ProjectContents from "../organisms/MainProjectContents";

//MainMember Import
import MemberTextBox from "../organisms/MainMemberTextBox";
import MemberContents from "../organisms/MainMemberContents";

//MainContact Import
import ContactTextBox from "../organisms/MainContactTextBox";
import ContactContents from "../organisms/MainContactContents";

// import AOS from 'aos';
import "aos/dist/aos.css";
// AOS.init();

const GridBlock = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 616fr 584fr;
  grid-template-rows: 220fr 463fr;
  @media screen and (max-width: 1279px) {
    grid-template-rows: 205fr 739fr;
  }
  @media screen and (max-width: 767px) {
    grid-template-rows: 237fr 634fr;
  }
`;
function MainTemplate() {
  return (
    <>
      <MainHeader />
      <CommonContainer>
        <AboutEcTextBox />
        <AboutEcVideo />
        <AboutEcContents />
      </CommonContainer>
      <CommonContainer color="white">
        <GridBlock>
          <ActivityTextBox />
          <ActivityContents />
          <ActivityPhoto />
        </GridBlock>
      </CommonContainer>
      <CommonContainer>
        <ProjectTextBox />
        <ProjectContents main />
      </CommonContainer>
      <CommonContainer color="white">
        <MemberTextBox />
        <MemberContents />
      </CommonContainer>
      <CommonContainer>
        <ContactTextBox />
        <ContactContents />
      </CommonContainer>
    </>
  );
}

export default React.memo(MainTemplate);
