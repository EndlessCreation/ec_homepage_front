import React from "react";
import styled from "styled-components";

const Grid = styled.div`
    display: grid;

    .wrapper {
        display: grid;
        grid-template-columns: 28fr 332fr ;
        grid-template-rows : 196fr 54fr 19fr 48fr 72fr;
        
        grid-auto-rows: minmax(100px, auto);    # 최소크기는 100px 이되, 창이 이보다 작아지면 자동으로 
      }
    
      .title {
        grid-column: 2;
        grid-row: 2;
        font-size: 36px;
        font-weight: 800;
        color: black;
        font-family: Kanit;

      }

      .paragraph{
        grid-column: 2;
        grid-row: 4;
        font-size: 18px;
        // font-weight: 400;
        line-height: 1.5;
        font-family: NanumSqaureExtraBold;
      }

`;

function HomeMobile({ name, explain, explain2 }) {
  return (
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
  );
}

HomeMobile.defaultProps = {
  name: "A",
  explain: "2021년",
};

export default HomeMobile;
