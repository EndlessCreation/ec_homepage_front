import React from "react";
import Size from "./Size";
import styled, {keyframes} from "styled-components";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Top = styled.div`
  width: 100%;
  margin: 0 auto;
  opacity: 1;
  background-color: #f2f2f2;
  height: 100%;
`;

const Box = styled.div`
  background: #f2f2f2; 
  max-width: 1280px;
  margin: 0 auto;
  padding-top: 101px;
  padding-bottom: 101px;
  padding-left: 30px;
  padding-right: 30px;
  box-sizing: border-box;
  opacity: 1;
  @media screen and ${Size.device.tablet} {
    max-width: 640px;
    padding-left: 16px;
    padding-right: 16px;
    margin: 0 auto;
  }
  @media screen and ${Size.device.moblie} {
    padding-top: 40px;
    padding-bottom: 40px;
    max-width: 320px;
    padding-left: 8px;
    padding-right: 8px;
    margin: 0 auto;
  }
`;

const WhiteBox = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  background-color: #fff;
`

const TextBox = styled.div`
 width: 358px;
 height: 216px;
 padding-top: 140px;
 margin: 0 auto;
 font-family: NanumSquareRegular;
font-size: 180px;
font-weight: 400;
line-height: 211px;
letter-spacing: 0em;
text-align: center;

@media screen and ${Size.device.tablet} {
    width: 308px;
    height: 166px;
    margin: 0 auto;
    font-size: 130px;
    font-weight: 400;
    line-height: 211px;
    letter-spacing: 0em;
    text-align: center;
  }

  @media screen and ${Size.device.moblie} {
    padding-top: 80px;
    width: 258px;
    height: 116px;
    margin: 0 auto;
    font-size: 80px;
    font-weight: 400;
    line-height: 211px;
    letter-spacing: 0em;
    text-align: center;
  }
`

const SubText = styled.div`
width: 500px;
padding-top: 25px;
margin: 0 auto;
font-family: NanumSquareRegular;
font-size: 20px;
font-weight: 400;
line-height: 35px;
letter-spacing: 0em;
font-align: center;
text-align: center;
padding-bottom: 180px;

@media screen and ${Size.device.tablet} {
    width: 300px;

    margin: 0 auto;
    font-size: 16px;
    font-weight: 400;
    line-height: 35px;
    letter-spacing: 0em;
    text-align: center;
  }

  @media screen and ${Size.device.moblie} {
    width: 230px;
    padding-top: 30px;
    margin: 0 auto;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: center;

    padding-bottom: 100px;
  }
`


const ImgBlock = styled.img`
  position: absolute;

  padding-top: 40px;
  padding-left: 160px;
  margin: 0 auto;
  width: 208px;
  height: 257px;
  padding-bottom: 180px;
  
  @media screen and ${Size.device.tablet} {
    padding-left: 60px;
    width: 130px;
    height: 157px;
  }

  @media screen and ${Size.device.moblie} {
    padding-top: 25px;
    padding-left: 19px;
    width: 90px;
    height: 107px;
  }
`;

function NotFind() {
    return(
        <>
        <Top>
            <Box>
                <WhiteBox>
                    <div data-aos="fade-right">
                        <ImgBlock src={"./images/교수님사진.png"}/>
                    </div>
                    <TextBox>404</TextBox>
                    <SubText>현재 찾을 수 없는 페이지입니다.
                        <br />
                        <br />
                            존재하지 않는 주소를 입력하셨거나, <br />
                            요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없어요 :)
                    </SubText>
                </WhiteBox>
            </Box>
        </Top>
        </>
    )
}

export default NotFind;