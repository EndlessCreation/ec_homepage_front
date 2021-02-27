import React from "react";
import styled from "styled-components";
import MemberGradSlide from "../molecules/MemberGradSlide";
// import AOS from "aos";
import "aos/dist/aos.css";
// AOS.init();

const GradBox = styled.div`
  width: 848px;
  padding-bottom: 130px;
  padding-left: 22.166666667%;

  @media screen and (min-width:768px) and (max-width:1279px) {
    width: 608px;
    padding-bottom: 120px;
    padding-left: 0%;

    margin: 0 auto;
  }

  @media screen and (max-width:767px) {
    width: 304px;

    padding-left: 0%;
    padding-bottom: 101px;
    margin: 0 auto;
  }
`;

function MemberGraduate() {
  return (
    <>
      <GradBox>
        <MemberGradSlide />
      </GradBox>
      </>
  );
}

export default MemberGraduate;
