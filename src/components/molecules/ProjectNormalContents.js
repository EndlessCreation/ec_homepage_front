import React, { useEffect, useState } from "react";
import ProjectBox from "../atoms/ProjectNormalBox";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import Pages from "../atoms/ProjectSlidePage";
import {
  getProject,
  getProjectData,
  useECDispatch,
  useECState,
} from "../../context/Context";

const BlockforProjectContent = styled.div`
  @media screen and (min-width: 1280px) {
    padding-left: 266px;
    padding-bottom: 160px;
    width: 880px;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 608px;
    padding-bottom: 120px;
  }

  @media screen and (max-width: 767px) {
    padding-bottom: 100px;
  }
`;

const StyledSlider = styled(Slider)`
  .slick-slide div {
    outline: none;
  }

  @media screen and (min-width: 1280px) {
    .slick-prev {
      z-index: 2;
      position: absolute;
      transform: translate(-245px, 277px);
      opacity: 1;
      color: #afafaf;
    }
    .slick-next {
      z-index: 2;
      position: absolute;
      opacity: 1;
      color: #afafaf;
      transform: translate(-1050px, 277px);
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    .slick-prev {
      z-index: 2;
      position: absolute;
      transform: translate(520px, -332px);
      opacity: 1;
      color: #afafaf;
    }
    .slick-next {
      z-index: 2;
      position: absolute;
      opacity: 1;
      color: #afafaf;
      transform: translate(-40px, -332px);
    }
  }

  @media screen and (max-width: 767px) {
    .slick-prev {
      z-index: 2;
      position: absolute;
      transform: translate(225px, -340px);
      opacity: 1;
      color: #afafaf;
    }
    .slick-next {
      z-index: 2;
      position: absolute;
      opacity: 1;
      color: #afafaf;
      transform: translate(-30px, -340px);
    }
  }
`;

function ProjectContentBox() {
  const isPc = useMediaQuery({
    query: "(min-width: 768px)",
  });
  const isMobile = useMediaQuery({ query: " (max-width: 767px)" });
  const [pageState, setState] = useState({ currentSlide: 1 });

  const state = useECState();
  const dispatch = useECDispatch();
  const { data: project, loading, error } = state.project;

  useEffect(() => {
    getProject(dispatch);
    getProjectData(dispatch);
  }, [dispatch]);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!project) return null;

  const PCTotalslides = Math.ceil(project.length / 12);
  const MOBLIETotalslides = Math.ceil(project.length / 6);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    rows: 3,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: <FiChevronLeft type="button" class="slick-prev" />,
    nextArrow: <FiChevronRight type="button" class="slick-next" />,
    centerMode: false,
    afterChange: (currentSlide) => {
      if (currentSlide !== 0) {
        console.log(pageState.currentSlide);
        setState({ currentSlide: Math.ceil(currentSlide / 4) + 1 });
        console.log(currentSlide);
      } else setState({ currentSlide: 1 });
    },
  };

  const settingsforMobile = {
    dots: false,
    infinite: false,
    speed: 500,
    rows: 3,
    slidesToShow: 2,
    slidesToScroll: 2,
    centerMode: false,
    prevArrow: <FiChevronLeft type="button" class="slick-prev" />,
    nextArrow: <FiChevronRight type="button" class="slick-next" />,
    afterChange: (currentSlide) => {
      if (currentSlide !== 0) {
        console.log(pageState.currentSlide);
        setState({ currentSlide: Math.ceil(currentSlide / 2) + 1 });
        console.log(currentSlide);
      } else setState({ currentSlide: 1 });
    },
  };

  return (
    <>
      <BlockforProjectContent>
        {isPc && (
          <Pages>
            {pageState.currentSlide}/{PCTotalslides}
          </Pages>
        )}
        {isMobile && (
          <Pages>
            {pageState.currentSlide}/{MOBLIETotalslides}
          </Pages>
        )}
        {isPc && (
          <StyledSlider {...settings}>
            {project.map((data) => {
              return (
                <>
                  <ProjectBox project={data} />
                </>
              );
            })}
          </StyledSlider>
        )}
        {isMobile && (
          <StyledSlider {...settingsforMobile}>
            {project.map((data) => {
              return <ProjectBox project={data}></ProjectBox>;
            })}
          </StyledSlider>
        )}
      </BlockforProjectContent>
    </>
  );
}

export default ProjectContentBox;
