import React from "react";
import styled from "styled-components";

const Photo = styled.div`
  width: 100%;
  height: 372px;
  background-color: #dddddd;
  margin-top: 32px;
  box-shadow: 5px 5px 5px gray;

  img {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 1279px) {
    height: 300px;
    margin-top: 16px;
  }

  @media screen and (max-width: 767px) {
    height: 137px;
    margin-top: 12px;
  }
`;

function PhotoBox({ url }) {
  return (
    <Photo>
      <img src={url} alt="활동사진"></img>
    </Photo>
  );
}

export default React.memo(PhotoBox);
