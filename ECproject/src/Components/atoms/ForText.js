import React from 'react';
import styled from 'styled-components'

const Text =styled.div`
@media screen and (min-width: 1280px){
    text-align:left;
    font: normal normal bold 32px/48px Kanit;
    letter-spacing: 0px;
    color: #101010;
    opacity: 1;
}

@media screen and (min-width:640px) and (max-width:1279px){
    text-align:left;
    font:normal normal bold 28px/42px Kanit;
    letter-spacing: 0px;
    color: #101010;
    opacity:1;
}

@media screen and (max-width:639px){
    text-align: left;
font: normal normal bold 24px/35px Kanit;
letter-spacing: 0px;
color: #101010;
opacity: 1;
}
`;

function ForText({children}){
    return <Text>{children}</Text>;
}

export default ForText;