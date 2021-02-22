import React from "react";
import styled from "styled-components";
import WrapperPC from "./organisms/WrapperPC";

import { useMonthState } from "../../context/MonthProvider";

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Back = styled.div`
  width: 100%;
  height: 915px;
  margin: 0;
  padding: 0;
  background-color: #f2f2f2;
`;

const MonthGrid = styled.div`
  display: grid;

  .component {
    display: grid;
    grid-template-rows: 35fr 44fr 74fr;
    grid-template-columns: 10.75rem;
    padding: 18px;
  }

  .month {
    grid-column: 1;
    grid-row: 1;
    font-size: 24px;
    color: black;
    font-family: Kanit;
  }

  .bar {
    grid-column: 1;
    grid-row: 2;
    color: black;
    background-color: black;
    border: 0;
    outline: 0;
    width: 40%;
    height: 3px;
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 1px;
  }

  .detail {
    grid-column: 1;
    grid-row: 3;
    font-size: 16px;
    line-height: 1.5;
    font-family: NanumSquareRegular;
  }
`;

const BarStyle = styled.div`
  padding-top: 7px; ;
`;
const FlexBox = styled.div`
  margin-left: 266px; // 옆에 칸 띄우기

  .box-container {
    display: flex;
    flex-direction: row; // 옆으로 정렬
    flex-wrap: wrap; // 공간이 없을때 자동 줄바꿈
    justify-content: flex-start;
  }
`;

function Month({ month }) {
  return (
    <MonthGrid>
      <div class="component">
        <div class="month">{month.name}</div>
        <BarStyle>
          <hr class="bar"></hr>
        </BarStyle>
        <div class="detail">
          {month.detail1}
          <br />
          {month.detail2}
          <br />
          {month.detail3}
        </div>
      </div>
    </MonthGrid>
  );
}

function MonthList() {
  const months = useMonthState(); // 상태 값 불러오기~

  return (

    <Back>      
      <WrapperPC background={"#f2f2f2"} title="Monthly">
      <div data-aos="fade-up"  data-aos-duration="2000" >
        <FlexBox>
          <div class="box-container">
            {months.map((month) => (
              <Month month={month} class="month-elem" />
            ))}
          </div>
        </FlexBox>
        </div>
      </WrapperPC>
      
    </Back>
    
  );
}

export default MonthList;
