import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import MemberStuCircle from "../atoms/MemberStuCircle";
import "../atoms/MemberSlide.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "react-responsive";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import Loader from "../atoms/CommonLoader";
import {
  useECState,
  useECDispatch,
  getStudent,
} from "../../context/Context";

const Block = styled.div`
  width: 848px;
  margin: 0 auto;
  .slick-prev {
    transform: translate(-200px, 218px);
    z-index: 2;
    position: absolute;
    opacity: 1;
    color: #c4c4c4;
  }
  .slick-next {
    z-index: 2;
    position: absolute;
    opacity: 1;
    color: #c4c4c4;
    transform: translate(-990px, 218px);
  }

  @media screen and (min-width:768px) and (max-width:1279px) {
    width: 608px;
    margin: 0 auto;
    .slick-prev {
      transform: translate(510px, -245px);
      z-index: 2;
      position: absolute;
      opacity: 1;
      color: #c4c4c4;
    }
    .slick-next {
      z-index: 2;
      position: absolute;
      opacity: 1;
      color: #c4c4c4;
      transform: translate(-45px, -245px);
    }
  }
  @media screen and (max-width:767px) {
    width: 303px;
    margin: 0 auto;
    .slick-prev {
      transform: translate(230px, -290px);
      z-index: 2;
      position: absolute;
      opacity: 1;
      color: #c4c4c4;
    }
    .slick-next {
      z-index: 2;
      position: absolute;
      opacity: 1;
      color: #c4c4c4;
      transform: translate(-28px, -290px);
    }
  }
`;

const PrevPages = styled.div`
  position: absolute;
  z-index: 2;
  transform: translate(-200px, 468px);
  color: #c4c4c4;
  opacity: 1;
  font-size: 24px;

  @media screen and (min-width:768px) and (max-width:1279px) {
    position: absolute;
    transform: translate(510px, -92.5px);
    color: #c4c4c4;
    opacity: 1;
    z-index: 2;
    font-size: 18px;
  }

  @media screen and (max-width:767px) {
    position: absolute;
    transform: translate(230px, -83px);
    color: #c4c4c4;
    opacity: 1;
    z-index: 2;
    font-size: 18px;
  }
`;
const Slash = styled.div`
  position: absolute;
  transform: translate(-178px, 468px);
  color: #c4c4c4;
  opacity: 1;
  z-index: 2;
  font-size: 22px;

  @media screen and (min-width:768px) and (max-width:1279px) {
    position: absolute;
    transform: translate(534px, -92.5px);
    color: #c4c4c4;
    opacity: 1;
    z-index: 2;
    font-size: 18px;
  }

  @media screen and (max-width:767px){
    position: absolute;
    transform: translate(249px, -83px);
    color: #c4c4c4;
    opacity: 1;
    z-index: 2;
    font-size: 18px;
  }
`;

const NextPages = styled.div`
  position: absolute;
  transform: translate(-157px, 468px);
  color: #c4c4c4;
  opacity: 1;
  z-index: 2;
  font-size: 24px;

  @media screen and (min-width:768px) and (max-width:1279px) {
    position: absolute;
    transform: translate(549px, -92.5px);
    color: #c4c4c4;
    opacity: 1;
    z-index: 2;
    font-size: 18px;
  }

  @media screen and (max-width:767px) {
    position: absolute;
    transform: translate(266px, -83px);
    color: #c4c4c4;
    opacity: 1;
    z-index: 2;
    font-size: 18px;
  }
`;

function MemberStudSlide() {
  const isPc = useMediaQuery({
    query: "(min-width: 1280px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1279px)",
  });
  const isMoblie = useMediaQuery({ query: "(max-width: 767px)" });

  const [number, setNumber] = useState({ currentPage: 1 });
  const state = useECState();
  const dispatch = useECDispatch();
  const { data: student, loading, error } = state.student;

  useEffect(() => {
    getStudent(dispatch);
  }, [dispatch]);
  if (loading)
    return (
      <div>
        <Loader />
      </div>
    );
  if (error) return <div>에러가 발생했습니다</div>;
  if (!student) return null;

  const PCTotalslides = Math.ceil(student.length / 15);
  const TABLETTotalslides = Math.ceil(student.length / 8);
  const MOBLIETotalslides = Math.ceil(student.length / 12);

  const NextArrow=({currentSlide,slideCount,...props})=>(
    <FiChevronRight {...props} type="button" className="slick-next" /> 
  )

  const PrevArrow=({currentSlide,slideCount,...props})=>(
    <FiChevronLeft {...props} type="button" className="slick-prev" />
  )

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 5,
    speed: 500,
    rows: 3, // 3행
     // eslint-disable-next-line 
    slidesToScroll: 5,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    afterChange: (currentPage) => {
      if (currentPage !== 0) {
        setNumber({ currentPage: Math.ceil(currentPage / 5) + 1 });
      } else setNumber({ currentPage: 1 });
    },
  };

  const settingsforTablet = {
    dots: false,
    infinite: false, // 무한으로 즐기게
    slidesToShow: 4,
    speed: 500,
    rows: 2,
     // eslint-disable-next-line 
    slidesToScroll: 4,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    afterChange: (currentPage) => {
      if (currentPage !== 0) {
        setNumber({ currentPage: Math.ceil(currentPage / 4) + 1 });
      } else setNumber({ currentPage: 1 });
    },
  };

  const settingsforMoblie = {
    dots: false,
    infinite: false, // 무한으로 즐기게
    slidesToShow: 3,
    speed: 500,
    rows: 4,
     // eslint-disable-next-line 
    slidesToScroll: 3,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    afterChange: (currentPage) => {
      if (currentPage !== 0) {
        setNumber({ currentPage: Math.ceil(currentPage / 3) + 1 });
      } else setNumber({ currentPage: 1 });
    },
  };

  return (
    <>
    <Block>
      
      <PrevPages>{number.currentPage}</PrevPages>
      <Slash>/</Slash>
      {isPc && <NextPages>{PCTotalslides}</NextPages>}
      {isMoblie && <NextPages>{MOBLIETotalslides}</NextPages>}
      {isTablet && <NextPages>{TABLETTotalslides}</NextPages>}
      {isPc && (
        <Slider {...settings}>
          {student.map((stud) => {
            return <MemberStuCircle key={stud.id} stud={stud} />;
          })}
        </Slider>
      )}
      {isTablet && (
        <Slider {...settingsforTablet}>
          {student.map((stud) => {
            return <MemberStuCircle key={stud.id} stud={stud} />;
          })}
        </Slider>
      )}
      {isMoblie && (
        <Slider {...settingsforMoblie}>
          {student.map((stud) => {
            return <MemberStuCircle key={stud.id} stud={stud} />;
          })}
        </Slider>
      )}
      
    </Block>
    </>
  );
}

export default React.memo(MemberStudSlide);
