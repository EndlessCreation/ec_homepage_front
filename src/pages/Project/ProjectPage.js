import React from "react";
import styled from "styled-components";
import EntireBox from "./EntireBox";

<<<<<<< HEAD
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

=======
>>>>>>> 587162f714bc9f29704b543a3352e4d42395d674
const Footer = styled.div`
  color: white;
  background: black;
  width: 100%;
  height: 419px;
`;

function ProjectPage() {
  return (
    <>
<<<<<<< HEAD
      <Header>Header</Header>
      <MainBlock>
        <EntireBox />
      </MainBlock>
=======
        <EntireBox />
>>>>>>> 587162f714bc9f29704b543a3352e4d42395d674
      <Footer>Footer</Footer>
    </>
  );
}

export default ProjectPage;
