import React from "react";
import styled from "styled-components";
import MainAboutEcText from "../atoms/MainAboutEcText";
import MainAboutEcSubText from "../atoms/MainAboutEcSubText";
// import AOS from 'aos';
import 'aos/dist/aos.css';
// AOS.init();


const TextBlock = styled.div`
  width: 100%;
  height: 342px;
  @media screen and (max-width: 1279px) {
    height: 260px;
    display: flex;
  }

  @media screen and (max-width: 767px) {
    height: 297px;
    flex-direction: column;
  }
`;

function AboutEcTextBox() {
  return (
    <TextBlock>
      <div data-aos="fade-up"  data-aos-duration="600" >
        <MainAboutEcText>AboutEC</MainAboutEcText>
      </div>
      <div data-aos="fade-up"  data-aos-duration="600" >
        <MainAboutEcSubText />
      </div>
    </TextBlock>
  );
}

export default AboutEcTextBox;
