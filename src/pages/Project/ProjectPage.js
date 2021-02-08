import React from "react";
import styled from "styled-components";
import EntireBox from "./EntireBox";

const Footer = styled.div`
  color: white;
  background: black;
  width: 100%;
  height: 419px;
`;

function ProjectPage() {
  return (
    <>
        <EntireBox />
      <Footer>Footer</Footer>
    </>
  );
}

export default ProjectPage;
