import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 640px;
  padding-left: 16px;
  padding-right: 16px;
  margin: 0 auto;
  height: 100%;
  background: ${(props) => props.background || "skyblue"};
`;

const WrapperStyleTablet = styled.div`
    display: grid;
    background: ${(props) => props.background || "skyblue"};

    .wrapper {
        display: grid;
        grid-template-rows : 80fr 42fr 56fr 580fr;
        grid-auto-rows: minmax(100px, auto);    # 최소크기는 100px 이되, 창이 이보다 작아지면 자동으로
        position: absolute; 
        top:0; 
        left: 0;
        width: 100%;
        height: 100%;
      }
    
      .title {
        grid-column: 1;
        grid-row: 2;
        font-size: 24px;
        //font-weight: 800;
        top:0; left: 0;
        color: black;
        font-family: Kanit;

      }

      .paragraph{
        grid-column: 1;
        grid-row:  ${(props) => props.row || "4"};
      }

`;

function WrapperTablet({ children, title, background, row }) {
  return (
    <>
      {/* <GlobalStyle/> */}
      <Container background={background}>
        <WrapperStyleTablet background={background} row={row}>
          <div class="wrapper">
            <div class="title">{title}</div>
            <div class="paragraph">{children}</div>
          </div>
        </WrapperStyleTablet>
      </Container>
    </>
  );
}

export default WrapperTablet;
