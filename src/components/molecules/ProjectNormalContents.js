import React, { useEffect, useState } from "react";
import ProjectBox from "../atoms/ProjectNormalBox";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import Loader from "../atoms/CommonLoader";

import {
  getProject,
  useECDispatch,
  useECState,
} from "../../context/Context";

const BlockforProjectContent = styled.div`
  @media screen and (min-width: 1280px) {
    padding-left: 266px;
    width: 880px;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 608px;
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
      transform: translate(520px, -374px);
      opacity: 1;
      color: #afafaf;
    }
    .slick-next {
      z-index: 2;
      position: absolute;
      opacity: 1;
      color: #afafaf;
      transform: translate(-40px, -374px);
    }
  }

  @media screen and (max-width: 767px) {
    .slick-prev {
      z-index: 2;
      position: absolute;
      transform: translate(235px, -377px);
      opacity: 1;
      color: #afafaf;
    }
    .slick-next {
      z-index: 2;
      position: absolute;
      opacity: 1;
      color: #afafaf;
      transform: translate(-22px, -377px);
    }
  }
`;

const Pages1 = styled.div`

  @media screen and (min-width:1280px)
  {
    position: absolute;
z-index: 2;
width: 56px;
  height: 26px;
  font-family: NanumSquareRegular;
  font-size: 22px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: 2.4px;
  text-align: right;
  color: #afafaf;
    transform : translate(-270px, 604px);
  }

  @media screen and (min-width:768px) and (max-width:1279px)
  {
    width: 40px;
  height: 20px;
  font-family: NanumSquareRegular;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: 1.8px;
  text-align: right;
  color: #afafaf;
  transform:translate(500px,-83px);
  }

  @media screen and (max-width:767px)
  {
    width: 50px;
  height: 20px;
  font-family: NanumSquareRegular;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: 1.8px;
  text-align: right;
  color: #afafaf;
  transform:translate(205px,-75px);
  }
`
;

const Pages2 = styled.div`

  @media screen and (min-width:1280px)
  {
    position: absolute;
z-index: 2;
width: 30px;
  height: 26px;
  font-family: NanumSquareRegular;
  font-size: 22px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: 2.4px;
  text-align: left;
  color: #afafaf;
    transform : translate(-197px, 604px);
  }

  @media screen and (min-width:768px) and (max-width:1279px)
  {
    width: 20px;
  height: 20px;
  font-family: NanumSquareRegular;
  font-size: 16px;
  line-height: 1.56;
  letter-spacing: 1.8px;
  text-align: left;
  color: #afafaf;
  transform:translate(552px,-123px);
  }

  @media screen and (max-width:767px)
  {
    width: 25px;
  height: 20px;
  font-family: NanumSquareRegular;
  font-size: 14px;
  line-height: 1.56;
  letter-spacing: 1.8px;
  text-align: left;
  color: #afafaf;
  transform:translate(265px,-115px);
  }
`
;

const Slash= styled.div`

  @media screen and (min-width:1280px)
  {
    position: absolute;
z-index: 2;
width: 56px;
  height: 26px;
  font-family: NanumSquareRegular;
  font-size: 22px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: 2.4px;
  text-align: right;
  color: #afafaf;
    transform : translate(-255px, 604px);
  }

  @media screen and (min-width:768px) and (max-width:1279px)
  {
    width: 40px;
  height: 20px;
  font-family: NanumSquareRegular;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: 1.8px;
  text-align: right;
  color: #afafaf;
  transform:translate(510px,-103px);
  }

  @media screen and (max-width:767px)
  {
    width: 50px;
  height: 20px;
  font-family: NanumSquareRegular;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: 1.8px;
  text-align: right;
  color: #afafaf;
  transform:translate(213px,-94.5px);
  }
`
;

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
  }, [dispatch]);

  if (loading) return <div><Loader/></div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!project) return null;

  const PCTotalslides = Math.ceil(project.length / 12);
  const MOBLIETotalslides = Math.ceil(project.length / 6);

  const NextArrow=({currentSlide,slideCount,...props})=>(
    <FiChevronRight {...props} type="button" className="slick-next" /> 
  )

  const PrevArrow=({currentSlide,slideCount,...props})=>(
    <FiChevronLeft {...props} type="button" className="slick-prev" />
  )

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    rows: 3,
    slidesToShow: 4,
     // eslint-disable-next-line 
    slidesToScroll: 4,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
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
     // eslint-disable-next-line 
    slidesToScroll: 2,
    centerMode: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
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
          <>
          <Pages1>{pageState.currentSlide}</Pages1>
          <Slash>/</Slash>
          <Pages2>{PCTotalslides}</Pages2>
          </>
        )}
        {isMobile && (
          <>
          <Pages1> {pageState.currentSlide}</Pages1>
          <Slash>/</Slash>
          <Pages2>{MOBLIETotalslides}</Pages2>
          </>
        )}
        {isPc && (
          <StyledSlider {...settings}>
            {project.map((data) => {
              return (
                  <ProjectBox key={data.id} project={data} />
              );
            })}
          </StyledSlider>
        )}
        {isMobile && (
          <StyledSlider {...settingsforMobile}>
            {project.map((data) => {
              return <ProjectBox key={data.id} project={data} ></ProjectBox>;
            })}
          </StyledSlider>
        )}
      </BlockforProjectContent>
    </>
  );
}

export default React.memo(ProjectContentBox);
