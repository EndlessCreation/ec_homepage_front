import React from 'react';
import styled from 'styled-components';

const BoxforEcPick=styled.div`
@media screen and (min-width:1280px){
    width:408px;
    height:306px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    opacity: 1;
}

    @media screen and (max-width:1279px){
    width:288px;
    height:216px;
    background:#FFFFFF;
    margin-bottom:16px;
    }
`;


function EcPickBox(){
    return <BoxforEcPick />;
}

export default EcPickBox;