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
  margin: 0 auto;
  text-align: center;
  flex: 1;
  font-family: NanumSquareRegular;
  font-size: 1rem;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;

  @media screen and (min-width:768px) and (max-width:1279px) {
    position: absolute;

    margin: 0 auto;

    font-family: NanumSquareRegular;
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
    font-family: NanumSquareRegular;
    font-size: 8px; 
    letter-spacing: var(--unnamed-character-spacing-0);
    color: var(--unnamed-color-232323);
    text-align: center;
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
    opacity: 0.2;
  }

  :hover {
    img {
      opacity: 1;
      transition: all 0.5s;
    }
    ${Text} {
      display: none;
      transition: all 0.5s;
    }
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
        opacity: 0.2;
      }

      :active {
        img {
          opacity: 1;
          transition: all 0.5s;
        }
        ${Text} {
          display: none;
          transition: all 0.5s;
        }
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
        opacity: 0.2;
      }

      :active {
        img {
          opacity: 1;
          transition: all 0.5s;
        }
        ${Text} {
          display: none;
          transition: all 0.5s;
        }
      }
}
`;

function MemberGradCircle({ grad }) {
  const url = grad.imageUrl === null ? "images/sample.png" : grad.imageUrl;

  return (
    <>
    <div data-aos="fade-up"  data-aos-duration="1000" >
    <GradInfoBlock>
      <img src={url} alt=" "/>
      <Text>
        {grad.name} {grad.generation}기
      </Text>
    </GradInfoBlock>
    </div>
    </>
  );
}

export default React.memo(MemberGradCircle);
