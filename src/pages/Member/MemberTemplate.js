import React from "react";
import MemberManagement from "./organisms/MemberManagement";
import MemberStudent from "./organisms/MemberStudent";
import MemberGraduate from "./organisms/MemberGraduate";
import CommonContainer from "./CommonContainer";
import TextBox from "../Project/molecules/TextBox";
import IntroContainer from "../Project/organisms/IntroContainer";


function MemberTemplate() {
  return (
    <>
    <IntroContainer main="Member" intro="EC에는 여러분의 성장을 도와줄" intro2="든든한 운영진과 멋진 선배들이 있어요!"/>
        <CommonContainer>
            <TextBox>Management</TextBox>
            <MemberManagement />
        </CommonContainer>


        <CommonContainer color={"white"}>
            <TextBox>Student</TextBox>
            <MemberStudent />
        </CommonContainer>

        <CommonContainer>
            <TextBox>Graduate</TextBox>
            <MemberGraduate />
        </CommonContainer>
    </>
  );
}

export default MemberTemplate;
