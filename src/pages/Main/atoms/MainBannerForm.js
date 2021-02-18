import React from "react";
import styled from "styled-components";

const Form = styled.div`
  width: 280px;
  height: 48px;
  background-color: #232323;
  float: right;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
  font-family: NanumSqaureBold;
  font-size: 18px;
  line-height: 26px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
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
  return <Form>31기 지원</Form>;
}

export default MainBannerForm;
