import React  from 'react';
import styled from 'styled-components';

const Container=styled.div`
    max-width: 320px;
    margin:0 auto;
    height:100%;
    background: ${(props) => props.background || "#f2f2f2"};
`;


const WrapperStyleMobile = styled.div`
display: grid;
    background: ${(props) => props.background || "skyblue"};

    .wrapper {
        display: grid;
        grid-template-columns: 8fr 312fr ;
        grid-template-rows : ${(props) => props.rows || "60fr 35fr 54fr 680fr"};
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

function WrapperMobile({children, title,background, rows}) {

    return (
        <>
    {/* <GlobalStyle/> */}
    <Container background={ background }>
    <WrapperStyleMobile background={ background }>
        <div class ='wrapper' grid-template-rows ={rows}>
          <div class='title'>{title}</div>
          <div class='paragraph'>{children}</div>
        </div>
    </WrapperStyleMobile>
    </Container>
    </>
    );
  }
  
  export default WrapperMobile;