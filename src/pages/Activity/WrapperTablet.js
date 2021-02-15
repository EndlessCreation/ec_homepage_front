import React  from 'react';
import styled from 'styled-components';

<<<<<<< HEAD
=======

const Container=styled.div`
    max-width: 640px;
    padding-left :16px;
    padding-right :16px;
    margin:0 auto;
    height:100%;
    background: ${(props) => props.background || "skyblue"};
`;


>>>>>>> 587162f714bc9f29704b543a3352e4d42395d674
const WrapperStyleTablet = styled.div`
    display: grid;
    background: ${(props) => props.background || "skyblue"};

    .wrapper {
        display: grid;
<<<<<<< HEAD
        grid-template-columns: 80fr 676fr 120fr ;
=======
>>>>>>> 587162f714bc9f29704b543a3352e4d42395d674
        grid-template-rows : 80fr 42fr 56fr 580fr;
        grid-auto-rows: minmax(100px, auto);    # 최소크기는 100px 이되, 창이 이보다 작아지면 자동으로
        position: absolute; 
        top:0; 
        left: 0;
        width: 100%;
        height: 100%;
      }
    
      .title {
<<<<<<< HEAD
        grid-column: 2;
        grid-row: 2;
        font-size: 28px;
=======
        grid-column: 1;
        grid-row: 2;
        font-size: 24px;
>>>>>>> 587162f714bc9f29704b543a3352e4d42395d674
        //font-weight: 800;
        top:0; left: 0;
        color: black;
        font-family: Kanit;

      }

      .paragraph{
<<<<<<< HEAD
        grid-column: 2;
        grid-row: 4;
=======
        grid-column: 1;
        grid-row:  ${(props) => props.row || "4"};
>>>>>>> 587162f714bc9f29704b543a3352e4d42395d674
      }

`;

<<<<<<< HEAD
function WrapperTablet({children, title,background}) {
=======
function WrapperTablet({children, title,background, row}) {
>>>>>>> 587162f714bc9f29704b543a3352e4d42395d674

    return (
        <>
    {/* <GlobalStyle/> */}
<<<<<<< HEAD
    <WrapperStyleTablet background={ background }>
=======
    <Container background={ background }> 
    <WrapperStyleTablet background={ background }  row={row}>
>>>>>>> 587162f714bc9f29704b543a3352e4d42395d674
        <div class ='wrapper'>
          <div class='title'>{title}</div>
          <div class='paragraph'>{children}</div>
        </div>
    </WrapperStyleTablet>
<<<<<<< HEAD
=======
    </Container>
>>>>>>> 587162f714bc9f29704b543a3352e4d42395d674
    </>

    )
    ;
  }
  
  export default WrapperTablet;