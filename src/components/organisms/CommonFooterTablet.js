import React from "react";
import styled from "styled-components";

const Back = styled.div`
  width: 100%;
  height: 297px;
  margin: 0;
  padding: 0;
  background-color: #232323;
`;

const Container = styled.div`
  background: ${(props) => props.background || "#232323"};
  max-width: ${(props) => props.nav || "640px"};
  padding-left: ${(props) => props.left || "16px"};
  padding-right: 16px;
  box-sizing: border-box;
  margin: 0 auto;
  height: 100%;
`;

const ContainerInner = styled.div`
  width: 50%;
  float: left;
`;

const Logo = styled.div`
  padding-top: 48px;
  font-family: Kanit;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: 0.18px;
  text-align: left;
  color: #f2f2f2;
`;

const Name = styled.div`
  padding-top: 62px;
  padding-bottom : 85px;
  width:300px;

  .wrapper {
    display: grid;
    grid-template-columns: 71fr 229fr ;
    grid-template-rows : 13fr 18fr 13fr 18fr 13fr ;
    
    grid-auto-rows: minmax(100px, auto);    # 최소크기는 100px 이되, 창이 이보다 작아지면 자동으로 
  }

  .t1 {
    grid-column: 1;
    grid-row: 1;
    font-family: NanumSqaureExtraBold;
    font-size: 12px;
    font-style: normal;
    line-height: 1.08;
    letter-spacing: -0.24px;
    text-align: left;
    color: #d2d2d2;
  }

  .t2 {
    grid-column: 1;
    grid-row: 3;
    font-family: NanumSqaureExtraBold;
    font-size: 12px;
    font-style: normal;
    line-height: 1.08;
    letter-spacing: -0.24px;
    text-align: left;
    color: #d2d2d2;

  }

  .t3 {
    grid-column: 1;
    grid-row: 5;
    font-family: NanumSqaureExtraBold;
    font-size: 12px;
    font-style: normal;
    line-height: 1.08;
    letter-spacing: -0.24px;
    text-align: left;
    color: #d2d2d2;

  }


  .p1{
    grid-column: 2;
    grid-row: 1;
    font-family: NanumSqaureExtraBold;
    font-size: 12px;
    font-style: normal;
    line-height: 1.08;
    letter-spacing: -0.24px;
    text-align: left;
    color: #d2d2d2;
  }

  .p2{
    grid-column: 2;
    grid-row: 3;
    font-family: NanumSqaureExtraBold;
    font-size: 12px;
    font-style: normal;
    line-height: 1.08;
    letter-spacing: -0.24px;
    text-align: left;
    color: #d2d2d2;
  }

  .p3{
    grid-column: 2;
    grid-row: 5;
    font-family: NanumSqaureExtraBold;
    font-size: 12px;
    font-style: normal;
    line-height: 1.08;
    letter-spacing: -0.24px;
    text-align: left;
    color: #d2d2d2;
  }

`;
const Icon = styled.div`
  float: right;
  padding-top: 56px;

  display: flex;
  flex-direction: row; // 옆으로 정렬

  .circle {
    font-family: Kanit-Regular;
    font-size: 12px;
    font-weight: 300;
    height: 18px;
    padding-left:18px;
    line-height: 1.5;
    letter-spacing: -0.24px;
    text-align: right;

    a{
      color: #d2d2d2;
    }
    
  }
`;

const Cop = styled.div`
  float: right;
  padding-top: 122px;

  opacity: 0.73;
  font-family: Kanit;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: right;
  color: #d2d2d2;
`;

function Footer({ nav, left }) {
  return (
    <Back>
      <Container nav={nav} left={left}>
        <ContainerInner>
          <Logo>Endless Creation</Logo>
          <Name>
            <div className="wrapper">
            <div className ='t1'>디자이너</div>
            <div className ='t2'>프론트엔드</div>
            <div className ='t3'>백엔드</div>
            <div className='p1'>김재완 </div>
            <div className='p2'>조인혁 &ensp; 김미성 &ensp; 김초희&ensp; 마경미 &ensp;오예진</div>
            <div className='p3'>김건훈 &ensp; 김예림 &ensp; 이상진&ensp;</div>
            </div>
          </Name>
        </ContainerInner>
        <ContainerInner>
          <Icon>
            <div className="circle"><a href='https://github.com/EndlessCreation' target='_blank' rel="noreferrer">Github</a></div>
            <div className="circle"><a href='https://open.kakao.com/o/sidItFZc' target='_blank' rel="noreferrer">KakaoTalk</a></div>
          </Icon>
        </ContainerInner>
        <ContainerInner>
          <Cop>©EndlessCreation. All rights reserved 2021.</Cop>
        </ContainerInner>
      </Container>
    </Back>
  );
}

export default React.memo(Footer);
