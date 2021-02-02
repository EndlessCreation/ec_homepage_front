import React from "react";
import styled from "styled-components";
import EntireBox from "./EntireBox";

const Header = styled.div`
  color: white;
  background: black;
  width: 100%;
  height: 120px;
`;

const MainBlock = styled.div`
  width: 100%;
  height: calc(100vh-120px);
`;

const Footer = styled.div`
  color: white;
  background: black;
  width: 100%;
  height: 419px;
`;

function ProjectPage() {
  return (
    <>
      <Header>Header</Header>
      <MainBlock>
        <EntireBox />
      </MainBlock>
      <Footer>Footer</Footer>
    </>
  );
}

export default ProjectPage;
