import React from 'react';
import styled from 'styled-components';

import Manager from '../atoms/Manager';
import { ManaProvider } from '../states/ManaState';
import Device from '../Device';

const ManBox = styled.div`
width: 848px;
padding-top: 72px;
padding-right: 23.2291667%;
padding-left: 32.6041667%;

margin: 0 auto;

@media only screen and ${Device.device.tablet}{

  width: 608px;
  padding-top: 56px;
  padding-right: 10.178117048346055979643765%;
  padding-left: 10.178117048346055979643765%;

  margin: 0 auto;
}

@media only screen and ${Device.device.moblie}{

  width: 304px;
  padding-top: 54px;
  padding-right: 7.777777777777777777777777%;
  padding-left: 7.777777777777777777777777%;

  margin: 0 auto;
}
`

function Management(){
    return(
      <ManBox>
        <ManaProvider>
          <Manager/>
        </ManaProvider>
      </ManBox>
    )
}

export default Management;