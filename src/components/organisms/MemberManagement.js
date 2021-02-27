import React from "react";
import styled from "styled-components";
import Size from "../../Size";
import MemberManager from "../molecules/MemberManager";

const FlexBox = styled.div`
  width: 848px;
  padding-left: 22.166666667%;
  padding-bottom: 130px;
  @media screen and ${Size.device.tablet} {
    width: 608px;
    padding-left: 0%;
    margin: 0 auto;
    padding-bottom: 100px;
  }
  @media screen and ${Size.device.moblie} {
    width: 304px;
    padding-left: 0%;
    margin: 0 auto;
    padding-bottom: 80px;
  }
`;

function MemberManagement() {
  return (
    <>
      <FlexBox>
        <MemberManager />
      </FlexBox>
      </>
  );
}

export default MemberManagement;
