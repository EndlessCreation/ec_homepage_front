import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { darken, lighten } from "polished";
import Loader from "../atoms/CommonLoader";
import {
  useECState,
  useECDispatch,
  getPhotos,
} from "../../context/Context";

// import AOS from "aos";
import "aos/dist/aos.css";
// AOS.init();


//현재상태의 이미지만 보여줄 container
const ShowContainer = styled.div`
  width: 872px;
  overflow: hidden; // 선을 넘어간 이미지들은 보이지 않도록
  @media screen and (max-width: 1279px) {
    width: 624px;
    overflow: hidden; // 선을 넘어간 이미지들은 보이지 않도록
  }
  @media screen and (max-width: 767px) {
    width: 304px;
    overflow: hidden; // 선을 넘어간 이미지들은 보이지 않도록
  }
`;

// 두줄을 아래로 정렬
const PhotoContainer = styled.div`
  padding-bottom: 130px;
  .photo-container {
    display: flex;
    flex-direction: column; // 아래로 정렬
    flex-wrap: nowrap; // 공간이 없을때 자동 줄바꿈
  }
  @media screen and (max-width: 1279px) {
    padding-bottom: 80px;
  }
  @media screen and (max-width: 767px) {
    padding-bottom: 70px;
  }
`;

// 사진 옆으로 정렬
const PhotoBox = styled.div`
  .photo-box {
    display: flex;
    flex-direction: row; // 옆으로 정렬
    flex-wrap: nowrap; // 공간이 없을때 자동 줄바꿈
    justify-content: flex-start;
  }
  @media screen and (max-width: 1279px) {
    .photo {
      list-style: none;
      flex: 0 0 50%;
    }
  }
  @media screen and (max-width: 767px) {
    .photo {
      list-style: none;
      flex: 0 0 50%;
    }
  }
`;

// 이미지 하나하나의 스타일
const PhotoOne = styled.div`
  .photo {
    margin-right: 28px;
    margin-bottom: 28px;
  }
  @media screen and (max-width: 1279px) {
    .photo {
      margin-bottom: 16px;
      margin-right: 16px;
      width: 296px;
      height: 222px;
    }
  }
  @media screen and (max-width: 767px) {
    .photo {
      margin-right: 0px;
      margin-bottom: 16px;
      width: 304px;
      height: 228px;
    }
  }
`;

// 페이지 넘기는 버튼
const Button = styled.button`
  background: white;
  display: inline-flex;
  outline: none;
  border: none;
  color: #a9a9a9;
  font-size: 24px;
  vertical-align: middle;
  &:hover {
    color: ${lighten(0.1, "black")};
  }
  &:active {
    color: ${darken(0.1, "black")};
  }
  @media screen and (max-width: 1279px) {
    font-size: 18px;
  }
  @media screen and (max-width: 767px) {
    font-size: 18px;
  }
`;

// page 넘겨주는 버튼 위치
const Page = styled.div`
  float: left;
  width: 266px;
  height: 650px;
  color: #a9a9a9;
  font-size: 24px;
  position: relative;
  
  .group{
    margin-top : 616px;
  }
  .page{
    display:inline-block;
    vertical-align: middle;
  }
  @media screen and (max-width: 1279px) {
    float: right;
    width: 160px;
    height: 0px;
    color: #a9a9a9;
    font-size: 18px;
    position: relative;
    
    .group{
      position: absolute;
      margin-top : 0px;
      top: -89px;
    }
    .page{
      display:inline-block;
      vertical-align: middle;
    }
  }
  @media screen and (max-width: 767px) {
    float: right;
    width: 150px;
    height: 0px;
    color: #a9a9a9;
    font-size: 18px;
  
    .group{
      position: absolute;
      margin-top : 0px;
      top: -88px;
    }
    .page{
      display:inline-block;
      vertical-align: middle;
    }
  }
`;


function Photo({ photo }) {
  return (
    <PhotoOne>
      <img
        src={photo.imageUrl}
        alt="이미지내용"
        width="408px"
        height="306px"
        className="photo"
      />
    </PhotoOne>
  );
}

function PhotoList() {
  const state = useECState(); // 상태 값 불러오기~
  const dispatch = useECDispatch();

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const { data: photos, loading, error } = state.photos;

  useEffect(() => {
    if (!photos) {
      getPhotos(dispatch);
    } else {
      slideRef.current.style.transition = "all 0.5s ease-in-out";
      slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
    }
  }, [dispatch, currentSlide,photos]);

  

  if (loading) return <Loader/>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!photos) return null;

  const photoNum = photos.length;
  const TOTAL_SLIDES = Math.floor(photoNum / 4) - 1;

  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      // 더 이상 넘어갈 슬라이드가 없으면 슬라이드를 초기화합니다.
      // setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      // setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };



  return (
    <>
      <Page>
        <div className = 'group'>
          <Button onClick={prevSlide}>
            <AiOutlineLeft />
          </Button>
          <div className="page">
            &ensp;{currentSlide + 1}
            &ensp;/&ensp;
            {TOTAL_SLIDES + 1}&ensp;
            </div>
          <Button onClick={nextSlide}>
            <AiOutlineRight />
          </Button>
        </div>
      </Page>
      <ShowContainer>
        <div data-aos="fade-up" data-aos-duration="2000">
          <PhotoContainer ref={slideRef}>
            <div className="photo-container">
              <PhotoBox>
                <div className="photo-box">
                  {photos.slice(1, photoNum / 2 + 1).map((photo,index) => (
                    <Photo photo={photo} className="photo" key={index} />
                  ))}
                </div>
              </PhotoBox>
              <PhotoBox>
                <div className="photo-box">
                  {photos.slice(photoNum / 2, photoNum).map((photo, index) => (
                    <Photo photo={photo} className="photo"  key={index}/>
                  ))}
                </div>
              </PhotoBox>
            </div>
          </PhotoContainer>
        </div>
      </ShowContainer>
    </>
  );
}

export default React.memo(PhotoList);