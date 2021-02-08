import React from "react";
import styled from "styled-components";

const FooterStyle = styled.div`
    background : #232323;

    display: grid;

    .wrapper {
        display: grid;
        grid-template-columns: 40fr 1058fr  180fr ;
        grid-template-rows : 100fr 48fr 72fr 695fr;
        grid-auto-rows: minmax(100px, auto);    # 최소크기는 100px 이되, 창이 이보다 작아지면 자동으로
        position: absolute; 
        top:0; 
        left: 0;
        width: 100%;
        height: 100%;
      }
    
      .title {
        grid-column: 2;
        grid-row: 2;
        font-size: 32px;
        //font-weight: 800;
        top:0; left: 0;
        color: black;
        font-family: Kanit;

      }

      .paragraph{
        grid-column: 2/4;
        grid-row: 4;
      }



`;

function Footer(){
    return(
    <>
    </>
    )
    ;
}

export default Footer;
