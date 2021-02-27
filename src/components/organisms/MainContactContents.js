import React from "react";
import styled from "styled-components";
import ContatcMainText from "../atoms/MainContactMainText";
import ContactItem from "../atoms/MainContactItem";
// import AOS from 'aos';
import "aos/dist/aos.css";
// AOS.init();

const ContentsBlock = styled.div`
  width: auto;
  height: 287px;
  margin-left: 22.16%;
  margin-right: 12.5%;
  display: grid;
  grid-template-columns: 383fr 176fr 176fr;
  grid-template-rows: auto;
  @media screen and (max-width: 1279px) {
    width: 100%;
    height: 239px;
    margin-left: 0;
    margin-right: 0;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    height: 346px;
    margin-left: 0;
    margin-right: 0;
    grid-template-rows: 142fr 204fr;
    .location {
      grid-column: 1 / -1;
      grid-row: 1 / span 1;
      height: 142px;
    }
    .keyword2 {
      grid-column: 2 / -1;
      grid-row: 2 / span 1;
    }
  }
`;

const ContactInfo = styled.div``;
function ContactContents() {
  return (
    <div data-aos="fade-up" data-aos-duration="1000">
      <ContentsBlock>
        <ContactInfo className="location">
          <ContatcMainText font="Kanit">Location</ContatcMainText>
          <ContactItem>서울특별시 노원구 공릉로 232</ContactItem>
          <ContactItem>서울과학기술대학교 미래관 313호</ContactItem>
        </ContactInfo>
        <ContactInfo className="keyword1">
          <ContatcMainText>회장</ContatcMainText>
          <ContactItem>27기 김건훈</ContactItem>
          <ContactItem>010-2396-3177</ContactItem>
        </ContactInfo>
        <ContactInfo className="keyword2">
          <ContatcMainText>부회장</ContatcMainText>
          <ContactItem>27기 조인혁</ContactItem>
          <ContactItem>010-2642-2713</ContactItem>
        </ContactInfo>
      </ContentsBlock>
    </div>
  );
}

export default React.memo(ContactContents);
