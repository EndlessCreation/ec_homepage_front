import React from "react";
import styled from "styled-components";
// import AOS from 'aos';
import 'aos/dist/aos.css';
// AOS.init({
//   disable : 'mobile'
// });

//항목의 text부분
const Text = styled.div`
  position: absolute;
  margin: 0 auto;
  text-align: center;
  flex: 1;
  font: var(--unnamed-font-style-normal) normal normal 16px/28px
    var(--unnamed-font-family-nanumsquare);
  letter-spacing: var(--unnamed-character-spacing-0);
  font: normal normal normal 16px/28px NanumSquare;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;

  @media screen and (min-width:768px) and (max-width:1279px) {
    position: absolute;

    margin: 0 auto;

    font-family: NanumSquareR;
    font-size: 0.875rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.57;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
  }

  @media screen and (max-width:767px) {
    position: absolute;

    margin: 0 auto;

    font: var(--unnamed-font-style-normal) normal normal 16px/28px
      var(--unnamed-font-family-nanumsquare);
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-232323);
    text-align: center;
    font: normal normal normal 8px/15px NanumSquare;
    color: #ffffff;
    opacity: 1;
  }
`;

const GradInfoBlock = styled.div`
width: 128px;
height: 128px;
opacity: 1;
margin-bottom: 16px;
display: flex;
justify-content: center;
align-items: center;

border-radius: 54px;
background-color: #101010;
color: #ffffff;

img {
    width: 100%;
    height: 100%;
    border-radius: 54px;
    opacity: 0.64;
  }
}
@media screen and (min-width:768px) and (max-width:1279px)
{
    width: 112px;
    height: 112px;
    border-radius: 48px;
    opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 100%;
        height: 100%;
        border-radius: 48px;
        opacity: 0.64;
      }
    
}

@media screen and (max-width:767px)
{
    width: 67px;
    height: 67px;
    border-radius: 28px;
    opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;
      
    img {
        width: 100%;
        height: 100%;
        border-radius: 28px;
        opacity: 0.64;
      }
}
`;

function MemberGradCircle({ grad }) {
  return (
    <>
    <div data-aos="flip-right"  data-aos-duration="1000" >
      <>
    <GradInfoBlock>
      <img src={grad.imageUrl} alt="졸업생이미지"/>
      <Text>
        {grad.name} {grad.generation}기
        <br />
        {grad.hashTags.map((hash, index)=> 
                <div key={index}>{hash}</div>)}
      </Text>
    </GradInfoBlock>
    </>
    </div>
    </>
  );
}

export default MemberGradCircle;
