import React from "react";
import styled from "styled-components";

const ImgBlock = styled.div`
  width: auto;
  height: auto;
`;
function AboutEcImg({ url }) {
  return (
    <ImgBlock>
      <img src={url} alt="img" />
    </ImgBlock>
  );
}

export default AboutEcImg;
