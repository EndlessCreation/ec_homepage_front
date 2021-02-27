import React from "react";
import styled from "styled-components";
import MemberStudSlide from "../molecules/MemberStudSlide";

const StudBox = styled.div`
  width: 848px;
  padding-left: 22.166666667%;
  padding-bottom: 130px;

  @media screen and (min-width:768px) and (max-width:1279px) {
    width: 608px;
    padding-left: 0%;
    padding-bottom: 100px;
  }

  @media screen and (max-width:767px) {
    width: 303px;
    padding-left: 0%;
    padding-bottom: 80px;
  }
`;

function MemberStudent() {
  return (
    <>
      <StudBox>
        <MemberStudSlide />
      </StudBox>
      </>
  );
}

export default MemberStudent;
