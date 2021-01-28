import React from 'react';
import styled from 'styled-components';
import Device from './Device';

import Management from './organisms/Management';
import Student from './organisms/Student';
import Graduate from './organisms/Graduate';

//회색 배경
const Gray = styled.div`

background: var(--unnamed-color-f2f2f2) 0% 0% no-repeat padding-box;
background: #F2F2F2 0% 0% no-repeat padding-box;
opacity: 1;
padding-bottom: 85px;

`;

//흰색 배경
const White = styled.div`

  #FFFFFF 0% 0% no-repeat padding-box;
  opacity: 1;
  padding-bottom: 85px;
  margin: 0px;


`;

//제목?
const Container = styled.div`

  height: 48px;

  padding-left: 18.75%;
  padding-right: 71.25%;
  padding-top: 100px;

  font-size: 32px;
  font-weight: bold;
  letter-spacing: 0px;
  color: #101010;
  opacity: 1;

  @media only screen and ${Device.device.tablet}
  {
 
    height: 42px;

    padding-left: 10.416667%;
    padding-right: 10.416667%;
    padding-top: 80px;

    font-size: 28px;
    font-weight: bold;
    letter-spacing: 0px;
    color: #101010;
    opacity: 1;
  }

  @media only screen and ${Device.device.moblie}
  {

    height: 35px;

    padding-left: 7.77777778%;
    padding-right: 52.22222222%;
    padding-top: 60px;

    font-size: 24px;
    font-weight: bold;
    letter-spacing: 0px;
    color: #101010;
    opacity: 1;
  }



`


function Template(){
  return(
  <>
    <Gray>
      <Container>Management</Container>
      <Management />
    </Gray>
  
    <White>
      <Container>Student</Container>
      <Student />
    </White>

    <Gray>
      <Container>Graduate</Container>
      <Graduate />
    </Gray>
  </>
  )
}

export default Template;