import React from "react";
import styled from "styled-components";
// import AOS from 'aos';
import "aos/dist/aos.css";
// AOS.init({
//   disable : 'mobile'
// });

//항목의 text부분
const Text = styled.div`
  position: absolute;
  flex: 1;

  text-align: center;
  margin: 0 auto;
  font-family: NanumSquareRegular;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.75;
  letter-spacing: normal;
  background: var(--unnamed-color-b0b0b0) 0% 0% no-repeat padding-box;
  color: #ffffff;

  @media screen and (min-width:768px) and (max-width:1279px) {
    position: absolute;

    text-align: center;
    margin: 0 auto;

    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
  }
  @media screen and (max-width:767px) {
    position: absolute;

    text-align: center;
    margin: 0 auto;

    font-size: 8px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
  }
`;

// 파트장 표시
const Part = styled.div`
  position: absolute;
  width: 36px;
  height: 36px;
  background: #232323;
  border-radius: 83px;
  opacity: 1;
  z-index: 5;
  display: block;
  align-items: center;
  justify-content: center;

  font-family: Kanit;
  font-size: 24px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.46;
  letter-spacing: normal;
  text-align: center;
  color: #1ae49b;

  @media screen and (min-width:768px) and (max-width:1279px) {
    position: absolute;
    width: 30px;
    height: 30px;

    font-family: Kanit;
    font-size: 20px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.46;
    letter-spacing: normal;
    text-align: center;
    color: #1ae49b;
  }

  @media screen and (max-width:767px) {
    position: absolute;
    width: 26px;
    height: 26px;

    font-family: Kanit;
    font-size: 18px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.46;
    letter-spacing: normal;
    text-align: center;
    color: #1ae49b;
  }
`;

const StudInfoBlock = styled.div`
width: 156px;
height: 156px;
display: flex;
justify-content: center;
align-items: center;
color: #ffffff;
background: #101010;

border-radius: 68px;
margin-bottom: 16px;

img {
  width: 100%;
  height: 100%;
  border-radius: 68px;
  opacity: 0.5;
}



@media screen and (min-width:768px) and (max-width:1279px)
{
    width: 140px;
    height: 140px;
    border-radius: 60px;
    background: #101010;
    img {
      width: 100%;
      height: 100%;
      border-radius: 60px;
      opacity: 0.64;
    }
}

@media screen and (max-width:767px)
{
    width: 93px;
    height: 93px;
    border-radius: 38px;
    margin-bottom: 12px;
    background: #101010;
    img {
      width: 100%;
      height: 100%;
      border-radius: 38px;
      opacity: 0.64;
    }
}
`;

function MemberStuCircle({ stud }) {
  return (
    <>
    <div data-aos="fade-up"  data-aos-duration="1000" >
      {(function () {
        if (stud.part) return <Part>P</Part>;
      })()}
      <>
      <StudInfoBlock>
        <img src={stud.imageUrl} alt=" "/>
        <Text>
          {stud.name} {stud.generation}기<br />
          {stud.hashTags.map((hash, index)=> 
                <div key={index}>{hash}</div>)}
        </Text>
      </StudInfoBlock>
      </>
      </div>
    </>
  );
}

export default React.memo(MemberStuCircle);
