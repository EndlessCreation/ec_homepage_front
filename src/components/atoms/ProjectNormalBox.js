import React, { useCallback } from "react";
import styled from "styled-components";
import { useGlobalState, useGlobalDispatch } from "../../context/GlobalContext";

// import AOS from 'aos';
import "aos/dist/aos.css";
// AOS.init();

const BoxforProject = styled.div`
  @media screen and (min-width: 1280px) {
    width: 188px;
    height: 188px;
    opacity: 1;
    margin-bottom: 32px;
    cursor: pointer;
  }

  @media screen and (max-width: 1279px) {
    width: 140px;
    height: 140px;
    opacity: 1;
    margin-bottom: 16px;
    cursor: pointer;
  }

  @media screen and (max-width: 767px) {
    width: 146px;
    height: 146px;
    opacity: 1;
    margin-bottom: 16px;
    cursor: pointer;
  }
`;

function ProjectBox({ project }) {
  const GlobalDispatch = useGlobalDispatch();
  const id = project.id;
  const changeid = useCallback(() => {
    GlobalDispatch({
      type: "CHANGE_ID",
      id,
    });
  }, []);

  const openModal = useCallback(() => {
    GlobalDispatch({
      type: "MODAL_OPEN",
    });
  }, []);
  function ClickEvent(id) {
    openModal();
    changeid(id);
  }
  return (
    <>
      <div data-aos="flip-right" data-aos-duration="1000">
        <BoxforProject onClick={() => ClickEvent(project.id)}>
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
