import React from "react";
import styled from "styled-components";
import AboutEcGrowth from "../molecules/MainAboutEcGrowth";
import AboutEcSharing from "../molecules/MainAboutEcSharing";
import AboutEcCooperation from "../molecules/MainAboutEcCooperation";
// import AOS from 'aos';
import 'aos/dist/aos.css';
// AOS.init();


const ContentBlock = styled.div`
  width: 848px;
  height: 480px;
  margin-left: 22.16%;
  margin-right: 7%;
  display: flex;
  box-sizing: border-box;
  padding-top: 63px;
  @media screen and (max-width: 1279px) {
    width: 100%;
    height: 399px;
    margin-left: 0;
    margin-right: 0;
    padding-top: 56px;
  }
  @media screen and (max-width: 767px) {
    height: 560px;
    flex-direction: column;
  }
`;

function AboutEcContents() {
  return (
    <div data-aos="fade-up"  data-aos-duration="600" >
    <ContentBlock>
      <AboutEcGrowth />
      <AboutEcSharing />
      <AboutEcCooperation />
    </ContentBlock>
    </div>
  );
}

export default AboutEcContents;
