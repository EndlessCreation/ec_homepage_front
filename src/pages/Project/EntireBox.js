import React from "react";
import styled from "styled-components";
import IntroContainer from "../../Components/organisms/IntroContainer";
import EcPickContainer from "../../Components/organisms/EcPickContainer";
import ProjectContainer from "../../Components/organisms/ProjectContainer";

<<<<<<< HEAD
const Box1 = styled.div`
  width: 100%;
  height: 19%;
`;

const Box2 = styled.div`
  background: #f2f2f2;
  width: 100%;
  height: 32%;
`;

const Box3 = styled.div`
  width: 100%;
  height: 47%;
`;
=======


const Box2 = styled.div`
  background: #f2f2f2;
`;


>>>>>>> 587162f714bc9f29704b543a3352e4d42395d674

function EntireBox() {
  return (
    <>
<<<<<<< HEAD
      <Box1>
        <IntroContainer />
      </Box1>
      <Box2>
        <EcPickContainer />
      </Box2>
      <Box3>
        <ProjectContainer />
      </Box3>
=======
        <IntroContainer />
        <Box2>
        <EcPickContainer/>
        </Box2>
        <ProjectContainer />
>>>>>>> 587162f714bc9f29704b543a3352e4d42395d674
    </>
  );
}

export default EntireBox;
