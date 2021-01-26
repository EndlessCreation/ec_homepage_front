import React from 'react';
import styled from 'styled-components';

const Img = styled.span`
display: flex;
flex-direction: row;
flex-wrap: wrap;
margin-top : 24px;
margin-left: 24px;
width: 180px;
height: 180px;
background: #D0D0D0 0% 0% no-repeat padding-box;
border-radius: 80px;
opacity: 1;
`
//항목의 text부분
const Text = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
padding-top: 32px;
padding-bottom: 41px;
margin: 0 auto;

font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) 24px/27px var(--unnamed-font-family-nanumsquare);
letter-spacing: var(--unnamed-character-spacing-0);
color: var(--unnamed-color-101010);
text-align: left;
font: normal normal bold 24px/27px NanumSquare;
letter-spacing: 0px;
color: #101010;
opacity: 1;

`;

//하나의 항목의 block 스타일링 
const ManaInfoBlock = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;

width: 408px;
height: 232px;
background: #FFFFFF 0% 0% no-repeat padding-box;
opacity: 1;

justify-content: space-between;
margin-bottom: 16px;

`;


function ManagerInfo(id, name, grad,  position){

    return (
      <ManaInfoBlock>
        <Img />
      </ManaInfoBlock>      );
}

export default React.memo(ManagerInfo);