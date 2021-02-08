import React from "react";
import styled from "styled-components";

const Container=styled.div`
    max-width: 640px;
    padding-left :16px;
    padding-right :16px;
    margin:0 auto;
    height:100%;
`;


const GridTablet = styled.div`
    display: grid;

    .wrapper {
        display: grid;
        grid-template-rows : 180fr 54fr 24fr 48fr 80fr;
        grid-auto-rows: minmax(100px, auto);    # 최소크기는 100px 이되, 창이 이보다 작아지면 자동으로 
      }
    
      .title {
        grid-column: 1;
        grid-row: 2;
        font-size: 36px;
        font-weight: 800;
        color: black;
        font-family: Kanit;

      }

      .paragraph{
        grid-column: 1;
        grid-row: 4;
        font-size: 18px;
        font-weight: 400;
        line-height: 1.5;
        font-family: NanumSqaureExtraBold;
      }

`;

function HomeTablet({ name, explain, explain2 }) {
  return (
    <Container>
    <GridTablet>
      <div class="wrapper">
        <div class="title"> {name} </div>
        <div class="paragraph">
          {explain}
          <br />
          {explain2}
        </div>
      </div>
    </GridTablet>
    </Container>
  );
}

HomeTablet.defaultProps = {
  name: "A",
  explain: "2021년",
};

export default HomeTablet;
