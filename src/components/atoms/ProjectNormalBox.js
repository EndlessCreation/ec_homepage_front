import React, { useState } from "react";
import styled from "styled-components";
// import AOS from 'aos';
import "aos/dist/aos.css";
// AOS.init();

const BoxforProject = styled.div`
  @media screen and (min-width: 1280px) {
    width: 188px;
    height: 188px;
    opacity: 1;
    margin-bottom: 32px;
  }

  @media screen and (max-width: 1279px) {
    width: 140px;
    height: 140px;
    opacity: 1;
    margin-bottom: 16px;
  }

  @media screen and (max-width: 767px) {
    width: 146px;
    height: 146px;
    opacity: 1;
    margin-bottom: 16px;
  }
`;

function ProjectBox({ project }) {
  return (
    <>
      <div data-aos="flip-right" data-aos-duration="1000">
        <BoxforProject>
          <img
            src={project.imageUrl}
            alt={project.id}
            width="100%"
            height="100%"
          />
        </BoxforProject>
      </div>
    </>
  );
}

export default ProjectBox;
