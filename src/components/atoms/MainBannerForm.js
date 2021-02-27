import React from "react";
import styled from "styled-components";

const Form = styled.a`
  width: 280px;
  height: 48px;
  background-color: #1ae49b;
  float: right;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #101010;
  font-family: NanumSquareBold;
  text-decoration: none;
  font-size: 18px;
  line-height: 26px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  a {
    text-decoration: none;
    color: #101010;
  }
  @media screen and (max-width: 1279px) {
    width: 273px;
    height: 50px;
  }
  @media screen and (max-width: 767px) {
    width: 172px;
    height: 47px;
    font-size: 14px;
  }
`;

function MainBannerForm() {
  return (
    <Form
      target="_blank"
      href="https://docs.google.com/forms/d/e/1FAIpQLSf8W2m6_gePmXg7fDbrj-Mmru5cj04MvNyNc2WL0ebkO5cPXw/closedform"
    >
      31기 지원
    </Form>
  );
}

export default React.memo(MainBannerForm);
