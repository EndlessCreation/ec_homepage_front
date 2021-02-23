import React, { useEffect, useState, useRef } from "react";
import styled, { css } from "styled-components";
import { useMediaQuery } from "react-responsive";
import Loader from "../atoms/CommonLoader";

import SliderBoxs from "./MainSliderBoxs";
import SliderBox from "../atoms/MainSliderBox";
import SliderButton from "../atoms/MainSliderButton";
import {
  useExecutiveState,
  useExecutiveDispatch,
  getEcpick,
  getProjectData,
} from "../../context/MainContext";

//동적으로 영역 너비 설정 완료
const SlideBlock = styled.div`
  width: ${(props) => props.width}%;
  height: 306px;
  display: flex;
  background-color: #f2f2f2;
  @media screen and (max-width: 1279px) {
    height: 448px;
  }
`;

const ButtonBlock = styled.div`
  display: flex;
  float: right;
  width: 180px;
  margin-top: 66px;
  justify-content: space-between;
  @media screen and (max-width: 1279px) {
    margin-top: 54px;
    width: 150px;
  }
  @media screen and (max-width: 767px) {
    margin-top: 32px;
    width: 150px;
  }
`;

//기존 ecpick 배열을 새로운 배열(2개 단위)로 나누는 함수
function division(arr) {
  const len = arr.length;
  const cnt = Math.floor(len / 2);
  const tmp = [];
  for (var i = 0; i <= cnt * 2; i++) {
    tmp.push(arr.slice(i, i + 2));
    i++;
  }
  return tmp;
}

function SliderShow() {
  const [currentSlide, setCurrentSlide] = useState(0); //현재 슬라이더 상태
  const slideRef = useRef(null); //슬라이더 위치 확인

  const isPc = useMediaQuery({
    query: "(min-width:1280px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width:768px) and (max-width:1279px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  //Provider로 데이터 받아오기
  const state = useExecutiveState();
  const dispatch = useExecutiveDispatch();
  const { data: ecpick, loading, error } = state.ecpick;

  useEffect(() => {
    if (!ecpick) {
      getEcpick(dispatch);
    } else {
      slideRef.current.style.transition = "all 0.7s ease-in-out";
      slideRef.current.style.transform = `translateX(-${MoveSlide}%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
    }
  }, [dispatch, currentSlide]);
  if (loading) return <div><Loader/></div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!ecpick) return null;

  // ecpick을 NewArrary로 데이터를 가공하고 그 길이를 갖고 움직이는 영역을 설정.
  const NewArrary = division(ecpick);
  const MoveSlide = (currentSlide * 100) / NewArrary.length;

  //데이터 길이에 맞는 버튼 배열 생성 버튼 배열의 i는 id값으로 버튼에 들어감.
  const ButAry = [];
  for (let i = 0; i < NewArrary.length; i++) {
    ButAry.push(i);
  }
  // 버튼 클릭시 CurrentSlide 값을 변경. -> useEffect에서 변화를 감지해서 translate 하도록 함.
  function select(id) {
    setCurrentSlide(id);
  }
  //배열 버튼 동적 생성 완료

  //전체 영역의 너비를 동적으로 생성
  const width = isTablet
    ? (NewArrary.length * 100) / 2
    : NewArrary.length * 100;

  return (
    <>
      <SlideBlock ref={slideRef} width={width}>
        {NewArrary.map((data, index) => (
          <SliderBoxs key={index}>
            {data.map((data) => (
              <SliderBox id={data.id}></SliderBox>
            ))}
          </SliderBoxs>
        ))}
      </SlideBlock>
      <ButtonBlock>
        {ButAry.map((Btn) => (
          <SliderButton
            currentSlide={currentSlide}
            id={Btn}
            select={select}
          ></SliderButton>
        ))}
      </ButtonBlock>
    </>
  );
}

export default SliderShow;
