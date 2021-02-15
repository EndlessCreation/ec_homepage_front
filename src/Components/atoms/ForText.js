import React from 'react';
import styled from 'styled-components'

const Text =styled.div`
<<<<<<< HEAD
    font: normal normal bold 32px/48px Kanit;
    letter-spacing: 0px;
    color: #101010;
    opacity: 1;
=======

@media screen and (min-width:1280px){
    font-family: Kanit;
    font-size: 32px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: left;
    color: #101010;
  }

  @media screen and (min-width:768px) and (max-width:1279px){
    font-family: Kanit;
    font-size: 28px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: left;
    color: #101010;
  }

  @media screen and (max-width:767px){
    font-family: Kanit;
    font-size: 24px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.46;
    letter-spacing: normal;
    text-align: left;
    color: #101010;
  }
  }
}

>>>>>>> 587162f714bc9f29704b543a3352e4d42395d674
`;

function ForText({children}){
    return <Text>{children}</Text>;
}

export default ForText;