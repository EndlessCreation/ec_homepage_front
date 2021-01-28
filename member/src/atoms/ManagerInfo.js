import React from 'react';
import styled from 'styled-components';
import Device from '../Device';

const Img = styled.div`

width: 180px;
height: 180px;
background: #D0D0D0 0% 0% no-repeat padding-box;
border-radius: 80px;
opacity: 1;

@media only screen and ${Device.device.tablet}
{
width: 117px;
height: 117px;
background: #D0D0D0 0% 0% no-repeat padding-box;
border-radius: 80px;
opacity: 1;
}

@media only screen and ${Device.device.moblie}
{
width: 114px;
height: 114px;
background: #D0D0D0 0% 0% no-repeat padding-box;
border-radius: 80px;
opacity: 1;
}
`
//항목의 text부분
const Text = styled.span`
width: 150px;
height: 180px;

font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) 24px/27px var(--unnamed-font-family-nanumsquare);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-101010);
text-align: left;
font: normal normal bold 24px/27px NanumSquare;
letter-spacing: 0px;
color: #101010;
opacity: 1;

@media only screen and ${Device.device.tablet}
{
  width: 100px;
height: 117px;

font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) 24px/27px var(--unnamed-font-family-nanumsquare);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-101010);
text-align: left;
font: normal normal bold 18px NanumSquare;
letter-spacing: 0px;
color: #101010;
opacity: 1;
}

@media only screen and ${Device.device.moblie}
{
  width: 100px;
height: 114px;

font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) 24px/27px var(--unnamed-font-family-nanumsquare);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-101010);
text-align: left;
font: normal normal bold 18px NanumSquare;
letter-spacing: 0px;
color: #101010;
opacity: 1;
}

`;

//하나의 항목의 block 스타일링 
const ManaInfoBlock = styled.div`
width: 408px;
height: 232px;
background: #FFFFFF 0% 0% no-repeat padding-box;
opacity: 1;

justify-content: space-between;
margin-bottom: 16px;

@media only screen and ${Device.device.tablet}
{
  width: 295px;
  height: 155px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
opacity: 1;

justify-content: space-between;
margin-bottom: 16px;
}

@media only screen and ${Device.device.moblie}
{
  width: 304px;
  height: 151px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
opacity: 1;

justify-content: space-between;
margin-bottom: 16px;
}

`;

const InfoBox = styled.div`
display: flex;
flex-direction: row;
flex-wrap: nowrap;

justify-content: space-between;
width: 334px;

padding-bottom: 28px;
padding-left: 24px;
padding-top: 24px;

@media only screen and ${Device.device.tablet}
{
  display: flex;
flex-direction: row;
flex-wrap: nowrap;

justify-content: space-between;
width: 334px;

padding-bottom: 22px;
padding-left: 16px;
padding-top: 16px;
}

@media only screen and ${Device.device.tablet}
{
  display: flex;
flex-direction: row;
flex-wrap: nowrap;

justify-content: space-between;
width: 231px;

padding-bottom: 22px;
padding-left: 16px;
padding-top: 16px;
}

@media only screen and ${Device.device.moblie}
{
  display: flex;
flex-direction: row;
flex-wrap: nowrap;

justify-content: space-between;
width: 227px;

padding-bottom: 21px;
padding-left: 16px;
padding-top: 16px;
}
`


function ManagerInfo(id, name, grad, position){

    return (
      <ManaInfoBlock>
        <InfoBox>
          <Img />
          <Text>들어갈 정보</Text>
        </InfoBox>
      </ManaInfoBlock>      
      );
}

export default React.memo(ManagerInfo);