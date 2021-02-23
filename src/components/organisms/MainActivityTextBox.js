import React from "react";
import styled from "styled-components";
import MainText from "../atoms/MainText";
import MainSubText from "../atoms/MainSubText";
// import AOS from 'aos';
import 'aos/dist/aos.css';
// AOS.init();

const TextBlock = styled.div`
  width: 100%;
  height: 220px;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  display: flex;
  @media screen and (max-width: 1279px) {
    grid-column: 1 / -1;
    width: 100%;
    height: 205px;
  }

  @media screen and (max-width: 767px) {
    height: 237px;
    flex-direction: column;
  }
`;



function ActivityTextBox() {
  return (
    <TextBlock>
      <div data-aos="fade-up"  data-aos-duration="1500" >
        <MainText url={"/Activity"}>Activity</MainText>
      </div>
      <div data-aos="fade-up"  data-aos-duration="1500" >
        <MainSubText>EC에 오면 이런 활동을 할 수 있어요!</MainSubText>
      </div>
    </TextBlock>
  );
}

export default ActivityTextBox;
