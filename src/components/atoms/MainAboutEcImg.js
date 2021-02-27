import React from "react";
import styled from "styled-components";

const ImgBlock = styled.div`
  width: auto;
  height: auto;
  @media screen and (max-width: 767px) {
    grid-column: 1 / span 1;
    grid-row: 1 / -1;
    img {
      width: 95px;
      height: 100%;
    }
  }
`;
function AboutEcImg({ url }) {
  return (
    <ImgBlock>
      <img src={url} alt="img" />
    </ImgBlock>
  );
}

export default AboutEcImg;
