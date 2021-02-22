import React from "react";
import styled from "styled-components";

import MainHeader from "./MainHeader";
//common Template
import GreyContainer from "../Member/Template/GreyContainer";
import WhiteContainer from "../../pages/Member/Template/WhiteContainer";

//About Ec Import
import AboutEcTextBox from "./organisms/MainAboutEcTextBox";
import AboutEcVideo from "./atoms/MainAboutEcVideo";
import AboutEcContents from "./organisms/MainAboutEcContents";

//MainActivity Import
import ActivityTextBox from "./organisms/MainActivityTextBox";
import ActivityContents from "./organisms/MainActivityContents";
import ActivityPhoto from "./molecules/MainActivityPhoto";

//MainProject Import
import ProjectTextBox from "./organisms/MainProjectTextBox";
import ProjectContents from "./organisms/MainProjectContents";

//MainMember Import
import MemberTextBox from "./organisms/MainMemberTextBox";
import MemberContents from "./organisms/MainMemberContents";

//MainContact Import
import ContactTextBox from "./organisms/MainContactTextBox";
import ContactContents from "./organisms/MainContactContents";

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
      <GreyContainer>
        <AboutEcTextBox />
        <AboutEcVideo />
        <AboutEcContents />
      </GreyContainer>
      <WhiteContainer>
        <GridBlock>
          <ActivityTextBox />
          <ActivityContents />
          <ActivityPhoto />
        </GridBlock>
      </WhiteContainer>
      <GreyContainer>
        <ProjectTextBox />
        <ProjectContents main />
      </GreyContainer>
      <WhiteContainer>
        <MemberTextBox />
        <MemberContents />
      </WhiteContainer>
      <WhiteContainer>
        <ContactTextBox />
        <ContactContents />
      </WhiteContainer>
    </>
  );
}

export default MainTemplate;
