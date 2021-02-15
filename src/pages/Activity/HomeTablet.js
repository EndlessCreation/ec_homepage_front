import React from "react";
import styled from "styled-components";

<<<<<<< HEAD
const Grid = styled.div`
=======
const Container=styled.div`
    max-width: 640px;
    padding-left :16px;
    padding-right :16px;
    margin:0 auto;
    height:100%;
`;


const GridTablet = styled.div`
>>>>>>> 587162f714bc9f29704b543a3352e4d42395d674
    display: grid;

    .wrapper {
        display: grid;
<<<<<<< HEAD
        grid-template-columns: 80fr 688fr;
        grid-template-rows : 180fr 54fr 24fr 48fr 80fr;
        
=======
        grid-template-rows : 180fr 54fr 24fr 48fr 80fr;
>>>>>>> 587162f714bc9f29704b543a3352e4d42395d674
        grid-auto-rows: minmax(100px, auto);    # 최소크기는 100px 이되, 창이 이보다 작아지면 자동으로 
      }
    
      .title {
<<<<<<< HEAD
        grid-column: 2;
=======
        grid-column: 1;
>>>>>>> 587162f714bc9f29704b543a3352e4d42395d674
        grid-row: 2;
        font-size: 36px;
        font-weight: 800;
        color: black;
        font-family: Kanit;

      }

      .paragraph{
<<<<<<< HEAD
        grid-column: 2;
=======
        grid-column: 1;
>>>>>>> 587162f714bc9f29704b543a3352e4d42395d674
        grid-row: 4;
        font-size: 18px;
        font-weight: 400;
        line-height: 1.5;
<<<<<<< HEAD
        font-family: NanumSquareExtraBold;
=======
        font-family: NanumSqaureExtraBold;
>>>>>>> 587162f714bc9f29704b543a3352e4d42395d674
      }

`;

function HomeTablet({ name, explain, explain2 }) {
  return (
<<<<<<< HEAD
    <Grid>
=======
    <Container>
    <GridTablet>
>>>>>>> 587162f714bc9f29704b543a3352e4d42395d674
      <div class="wrapper">
        <div class="title"> {name} </div>
        <div class="paragraph">
          {explain}
          <br />
          {explain2}
        </div>
      </div>
<<<<<<< HEAD
    </Grid>
=======
    </GridTablet>
    </Container>
>>>>>>> 587162f714bc9f29704b543a3352e4d42395d674
  );
}

HomeTablet.defaultProps = {
  name: "A",
  explain: "2021년",
};

export default HomeTablet;
