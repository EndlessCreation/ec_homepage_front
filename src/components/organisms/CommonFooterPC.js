import React from "react";
import styled from "styled-components";

const Back = styled.div`
    width: 100%;
    height: 419px;
    margin: 0;
    padding: 0;
    background-color: #232323;
`;


const Container=styled.div`
    background: ${(props) => props.background || "#232323"};
    max-width:1280px;
    box-sizing : border-box;
    padding-left :40px;
    padding-right :40px;
    margin:0 auto;
    height:100%;
    
`;

const ContainerInner=styled.div`
    width:600px;  
    float: left;
    
`;

const Logo = styled.div`
    // padding-left : 40px;
    padding-top : 100px;
    color: #f2f2f2;
    font-family: Kanit;
    line-height: 1.46;
    letter-spacing: 0.24px;
    font-size: 24px;
`;

const Name = styled.div`
  padding-top: 72px;
  width: 461px;

  .wrapper {
    display: grid;
    grid-template-columns: 125fr 336fr ;
    grid-template-rows : 20fr 16fr 20fr 16fr 20fr ;
    
    grid-auto-rows: minmax(100px, auto);    # 최소크기는 100px 이되, 창이 이보다 작아지면 자동으로 
  }

  .t1 {
    grid-column: 1;
    grid-row: 1;
    font-family: NanumSqaureExtraBold;
    font-size: 18px;
    line-height: 1.17;
    letter-spacing: -0.36px;
    text-align: left;
    color: #d2d2d2;
  }

  .t2 {
    grid-column: 1;
    grid-row: 3;
    font-family: NanumSqaureExtraBold;
    font-size: 18px;
    line-height: 1.17;
    letter-spacing: -0.36px;
    text-align: left;
    color: #d2d2d2;

  }

  .t3 {
    grid-column: 1;
    grid-row: 5;
    font-family: NanumSqaureExtraBold;
    font-size: 18px;
    line-height: 1.17;
    letter-spacing: -0.36px;
    text-align: left;
    color: #d2d2d2;

  }


  .p1{
    grid-column: 2;
    grid-row: 1;
    font-family: NanumSqaureExtraBold;
    font-size: 18px;
    line-height: 1.17;
    letter-spacing: -0.36px;
    text-align: left;
    color: #d2d2d2;
  }

  .p2{
    grid-column: 2;
    grid-row: 3;
    font-family: NanumSqaureExtraBold;
    font-size: 18px;
    line-height: 1.17;
    letter-spacing: -0.36px;
    text-align: left;
    color: #d2d2d2;
  }

  .p3{
    grid-column: 2;
    grid-row: 5;
    font-family: NanumSqaureExtraBold;
    font-size: 18px;
    line-height: 1.17;
    letter-spacing: -0.36px;
    text-align: left;
    color: #d2d2d2;
  }

`;
const Icon = styled.div`
    float: right;
    padding-top: 100px ;

    display: flex;
    flex-direction: row;  // 옆으로 정렬

    .circle{
      height: 24px;
      padding-left:24px;
      font-family: Kanit-Regular;
      font-size: 16px;
      font-weight: 300;
      line-height: 1.5;
      letter-spacing: -0.32px;
      text-align: right;
    }

    a{
      color: #d2d2d2;
    }
`;

const Cop = styled.div`
  float: right;
  padding-top: 138px ;

  font-family: Kanit;
  font-size: 18px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: -0.36px;
  color: #d2d2d2;
`;

function FooterPC(){
    return(
    <Back>
    <Container>
      <ContainerInner>
      <Logo>Endless Creation</Logo>
      <Name>
        <div className ='wrapper'>
          <div className ='t1'>디자이너</div>
          <div className ='t2'>프론트엔드</div>
          <div className ='t3'>백엔드</div>
          <div className='p1'>김재완 </div>
          <div className='p2'>조인혁 &emsp; 김미성 &emsp; 김초희&emsp; 마경미 &emsp;오예진</div>
          <div className='p3'>김건훈 &emsp; 김예림 &emsp; 이상진&emsp;</div>
        </div>
      </Name>
      </ContainerInner>
      <ContainerInner>
        <Icon>
            <div className="circle"><a href='https://github.com/EndlessCreation'>Github</a></div>
            <div className="circle"><a href='https://github.com/EndlessCreation'>KakaoTalk</a></div>
          </Icon>
      </ContainerInner>
      <ContainerInner>
        <Cop>
            ©EndlessCreation. All rights reserved 2021.
        </Cop>
      </ContainerInner>
    </Container>
    </Back>
    )
    ;
}

export default React.memo(FooterPC);
