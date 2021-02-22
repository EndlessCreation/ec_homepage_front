import React from "react";
import styled from "styled-components";
import WrapperMobile from "./organisms/WrapperMobile";
import { useMonthState } from "../../context/MonthProvider";

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Back = styled.div`
  width: 100%;
  height: 1100px;
  margin: 0;
  padding: 0;
  background-color: #f2f2f2;
}`;

const MonthGridMobile = styled.div`
  display: grid;

  .component {
    display: grid;
    grid-template-rows: 27fr 20fr 68fr;
    grid-template-columns: 7rem;
    padding-right:35px;
    padding-bottom: 34px; 
  }

  .month {
    grid-column: 1;
    grid-row: 1;
    font-size: 18px;
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
  }

  .detail {
    grid-column: 1;
    grid-row: 3;
    font-size: 14px;
    line-height: 1.5;
    font-family: NanumSquareRegular;
  }
`;

const FlexBox = styled.div`
  .box-container {
    display: flex;
    flex-direction: row; // 옆으로 정렬
    flex-wrap: wrap; // 공간이 없을때 자동 줄바꿈
    justify-content: flex-start;
  }
`;

function Month({ month }) {
  return (
    <MonthGridMobile>
      <div class="component">
        <div class="month">{month.name}</div>
        <hr class="bar"></hr>
        <div class="detail">
          {month.detail1}
          <br />
          {month.detail2}
          <br />
          {month.detail3}
        </div>
      </div>
    </MonthGridMobile>
  );
}

function MonthListMobile() {
  const months = useMonthState();   // 상태 값 불러오기~

  return (
    <Back>
    <WrapperMobile background={"#f2f2f2"} title="Monthly">
    <div data-aos="fade-up"  data-aos-duration="2000" >
      <FlexBox>
        <div class="box-container">
          {months.map((month) => (
            <Month month={month} class="month-elem" />
          ))}
        </div>
      </FlexBox>
      </div>
    </WrapperMobile>
    </Back>
  );
}

export default MonthListMobile;
