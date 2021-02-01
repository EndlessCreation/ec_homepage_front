import React from 'react';
import styled from 'styled-components';
import Size from './Size';

import Intro from './organisms/Intro';
import Management from './organisms/Management';
import Student from './organisms/Student';
import Graduate from './organisms/Graduate';

const TopGray = styled.div`
width: 100%;
margin: 0 auto;
background: var(--unnamed-color-f2f2f2) 0% 0% no-repeat padding-box;
background: #F2F2F2 0% 0% no-repeat padding-box;
opacity: 1;
`

const TopWhite = styled.div`
width: 100%;
margin: 0 auto;

background: #FFFFFF 0% 0% no-repeat padding-box;
opacity: 1;
`

const Header = styled.div`
max-width: 1280px;
margin: 0 auto;
padding-left: 3.125%;
padding-right: 3.125%;
height: 120px;
opacity: 1;
font: bold;


@media screen and ${Size.device.tablet}
{
  height: 84px;

}

@media screen and ${Size.device.moblie}
{
  height: 72px;

}
`

const GrayContainer = styled.div`

max-width: 1280px;
margin: 0 auto;

padding-left: 3.125%;
padding-right: 3.125%;
padding-top: 100px;
padding-bottom: 130px;

background: var(--unnamed-color-f2f2f2) 0% 0% no-repeat padding-box;
background: #F2F2F2 0% 0% no-repeat padding-box;
opacity: 1;

@media screen and ${Size.device.tablet}{

  max-width: 640px;
   padding-left: 2.5%;
   padding-right: 2.5%;
   margin: 0 auto; 
   padding-top: 80px;
   padding-bottom: 100px; 
 }

 @media screen and ${Size.device.moblie}{

  max-width: 320px;
  padding-left: 2.5%;
  padding-right: 2.5%;
  margin: 0 auto; 
  padding-top: 60px;
  padding-bottom: 80px; 
}
`

const WhiteContainer = styled.div`
max-width: 1280px;
margin: 0 auto;

padding-left: 3.125%;
padding-right: 3.125%;
padding-top: 100px;
padding-bottom: 130px;

background: #FFFFFF 0% 0% no-repeat padding-box;
opacity: 1;

@media screen and ${Size.device.tablet}{
  max-width: 640px;

  padding-left: 2.5%;
  padding-right: 2.5%;
  padding-top: 80px;
  padding-bottom: 100px;

  margin: 0 auto;  
  
}

@media screen and ${Size.device.moblie}{

  max-width: 320px;
 padding-left: 2.5%;
 padding-right: 2.5%;
 padding-top: 60px;
 padding-bottom: 80px;

 margin: 0 auto;  
}
`
const TextBox = styled.div`
font-family: Kanit;
font-size: 2rem;
font-weight: bold;
font-stretch: normal;
font-style: normal;
line-height: 1.5;
letter-spacing: normal;
text-align: left;
color: #101010;
  height:48px;

  @media screen and ${Size.device.tablet}
  {
    font-family: Kanit;
    font-size: 1.75rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: left;
    color: #101010;
  }

  @media moblie and ${Size.device.tablet}
  {
    font-family: Kanit;
    font-size: 1.75rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: left;
    color: #101010;
  }

  @media moblie and ${Size.device.moblie}
  {
    font-family: Kanit;
    font-size: 1.5rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.46;
    letter-spacing: normal;
    text-align: left;
    color: #101010;
  }
  `

const IntroBox = styled.div`
background: #FFFFFF 0% 0% no-repeat padding-box;
opacity: 1;
`

const ManaBox = styled.div`
background: var(--unnamed-color-f2f2f2) 0% 0% no-repeat padding-box;
background: #F2F2F2 0% 0% no-repeat padding-box;
`

const StudBox = styled.div`
font-size: 32px;
font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) 32px/var(--unnamed-line-spacing-48) var(--unnamed-font-family-kanit);
`

const GradBox = styled.div`
background: var(--unnamed-color-f2f2f2) 0% 0% no-repeat padding-box;
background: #F2F2F2 0% 0% no-repeat padding-box;
`



function Template(){
  return(
    <>
{/* 
    <TopGray>
      <Header>Header</Header>
    </TopGray> */}

    <TopWhite>
      <WhiteContainer>
        <IntroBox>
          <Intro />
        </IntroBox>
      </WhiteContainer>
    </TopWhite>

    <TopGray>
    <GrayContainer>
      <ManaBox>
        <TextBox>
          Management
        </TextBox>
        <Management />
      </ManaBox>
    </GrayContainer>
    </TopGray>

    <TopWhite>
    <WhiteContainer>
      <StudBox>
        <TextBox>
          Student
        </TextBox>
        <Student />
      </StudBox>
    </WhiteContainer>
    </TopWhite>

    <TopGray>
    <GrayContainer>
      <GradBox>
        <TextBox>
          Graduate
        </TextBox>
        <Graduate />
      </GradBox>
    </GrayContainer>
    </TopGray>
    </>
  )
}

export default Template;