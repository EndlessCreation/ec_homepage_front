import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
const TextBlock = styled.div`
  width: 267px;
  font-size: 32px;
  font-family: Kanit;
  font-weight: bold;
  line-height: 48px;
  box-sizing: border-box;
  height: 100%;
  padding-top: 100px;
  display: inline-block;
  div {
    position: relative;
    font-size: 16px;
    font-family: NanumSquareBold;
    height: 18px;
  }
  div a {
    text-decoration: none;
    position: absolute;
    top: -10px;
    color: #afafaf;
  }
  div svg {
    position: absolute;
    top: 14px;
  }
  @media screen and (max-width: 1279px) {
    width: 208px;
    font-size: 28px;
    list-style: 42px;
    padding-top: 80px;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    height: auto;
    font-size: 24px;
    list-style: 35px;
    padding-top: 60px;
  }
`;
function MainText({ children, url }) {
  return (
    <TextBlock>
      {children}
      <div>
        <Link to={url}>
          View Detail <BsArrowRight />
        </Link>
      </div>
    </TextBlock>
  );
}

export default MainText;
