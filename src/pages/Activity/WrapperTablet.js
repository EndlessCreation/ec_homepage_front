import React  from 'react';
import styled from 'styled-components';

const WrapperStyleTablet = styled.div`
    display: grid;
    background: ${(props) => props.background || "skyblue"};

    .wrapper {
        display: grid;
        grid-template-columns: 80fr 716fr 80fr ;
        grid-template-rows : 80fr 42fr 56fr 580fr;
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
        font-size: 24px;
        //font-weight: 800;
        top:0; left: 0;
        color: black;
        font-family: Kanit;

      }

      .paragraph{
        grid-column: 2;
        grid-row: 4;
      }

`;

function WrapperTablet({children, title,background}) {

    return (
        <>
    {/* <GlobalStyle/> */}
    <WrapperStyleTablet background={ background }>
        <div class ='wrapper'>
          <div class='title'>{title}</div>
          <div class='paragraph'>{children}</div>
        </div>
    </WrapperStyleTablet>
    </>

    )
    ;
  }
  
  export default WrapperTablet;