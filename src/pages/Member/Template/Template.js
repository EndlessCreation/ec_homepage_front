import React from "react";
import styled from "styled-components";
import Size from "../../../Size";
import Navbar from "../../Main/MainNavbar";
import Management from "../organisms/Management";
import Student from "../organisms/Student";
import Graduate from "../organisms/Graduate";
import CommonFooter from "../../Activity/CommonFooter";
import IntroContainer from "../../Project/organisms/CommonHeader";
import Container from "./CommonContainer";

const TextBox = styled.div`
  font-family: Kanit;
  font-size: 2rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: #101010;
  height: 48px;
  @media screen and ${Size.device.tablet} {
    font-family: Kanit;
    font-size: 1.75rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: left;
    color: #101010;
    padding-left: 0px;
  }
  @media moblie and ${Size.device.moblie} {
    font-family: Kanit;
    font-size: 1.5rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.46;
    letter-spacing: normal;
    text-align: left;
    color: #101010;
    padding-left: 0px;
  }
`;


function Template() {
  return (
    <>
    <Navbar />
          <IntroContainer main="Member" intro="EC에는 여러분의 성장을 도와줄" intro2="든든한 운영진과 멋진 선배들이 있어요!"/>

        <Container>
            <TextBox>Management</TextBox>
            <Management />
        </Container>


        <Container color="white">
            <TextBox>Student</TextBox>
            <Student />
        </Container>



        <Container>
            <TextBox>Graduate</TextBox>
            <Graduate />
        </Container>


      <CommonFooter />
    </>
  );
}

export default Template;
