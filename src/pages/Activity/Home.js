import React from "react";
import styled from "styled-components";

<<<<<<< HEAD
=======
const Container=styled.div`
    max-width:1280px;
    padding-left :40px;
    padding-right :40px;
    margin:0 auto;
    height:100%;
`;

>>>>>>> 587162f714bc9f29704b543a3352e4d42395d674
const Grid = styled.div`
    display: grid;

    .wrapper {
        display: grid;
<<<<<<< HEAD
        grid-template-columns: 618fr 1302fr ;
=======
        grid-template-columns: 258fr 942fr ;
>>>>>>> 587162f714bc9f29704b543a3352e4d42395d674
        grid-template-rows : 254fr 95fr 8fr 66fr 130fr;
        
        grid-auto-rows: minmax(100px, auto);    # 최소크기는 100px 이되, 창이 이보다 작아지면 자동으로 
      }
    
      .title {
        grid-column: 2;
        grid-row: 2;
        font-size: 64px;
        font-weight: 800;
        color: black;
        font-family: Kanit;

      }

      .paragraph{
        grid-column: 2;
        grid-row: 4;
        font-size: 24px;
<<<<<<< HEAD
        font-weight: 400;
        line-height: 1.5;
        font-family: NanumSquareExtraBold;
=======
        // font-weight: 400;
        line-height: 1.5;
        font-family: NanumSqaureExtraBold;
>>>>>>> 587162f714bc9f29704b543a3352e4d42395d674
      }

`;

function Home({ name, explain, explain2 }) {
  return (
<<<<<<< HEAD
=======
    <Container>
>>>>>>> 587162f714bc9f29704b543a3352e4d42395d674
    <Grid>
      <div class="wrapper">
        <div class="title"> {name} </div>
        <div class="paragraph">
          {explain}
          <br />
          {explain2}
        </div>
      </div>
    </Grid>
<<<<<<< HEAD
=======
    </Container>
>>>>>>> 587162f714bc9f29704b543a3352e4d42395d674
  );
}

Home.defaultProps = {
  name: "A",
  explain: "2021년",
};

export default Home;
