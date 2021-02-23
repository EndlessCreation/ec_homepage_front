import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
// import AOS from 'aos';
import 'aos/dist/aos.css';
// AOS.init({
//   disable : 'mobile'
// });

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
    top: -5px;
    color: #afafaf;
  }
  div svg {
    position: absolute;
    top: 14px;
  }
  @media screen and (max-width: 1279px) {
    width: 208px;
    font-size: 28px;
    line-height: 42px;
    padding-top: 80px;
    div a {
      top: -3px;
    }
    div svg {
      top: 11px;
    }
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    height: auto;
    font-size: 24px;
    line-height: 35px;
    padding-top: 60px;
    div a {
      top: -2px;
    }
    div svg {
      top: 8px;
    }
  }
`;
function MainText({ children, url }) {
  return (
    <div data-aos="fade-up"  data-aos-duration="1500" >
    <TextBlock>
      {children}
      {url && (
        <div>
          <Link to={url}>
            View Detail <BsArrowRight />
          </Link>
        </div>
      )}
    </TextBlock>
    </div>
  );
}

export default MainText;
