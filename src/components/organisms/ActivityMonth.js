import React from "react";
import styled from "styled-components";
import TextBlock from "../molecules/CommonSubTextContents";
import { useMonthState } from "../../context/MonthProvider";

// import AOS from "aos";
import "aos/dist/aos.css";
// AOS.init();

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

  @media screen and (max-width: 1279px) {
    display: grid;

    .component {
      display: grid;
      grid-template-rows: 27fr 35fr 68fr;
      grid-template-columns: 7rem;
      padding-right: 40px;
      padding-bottom: 32px;
      padding-top: 0px;
      padding-left: 0px;
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
      height: 2px;
      margin-left: 0px;
      margin-right: 0px;
    }

    .detail {
      grid-column: 1;
      grid-row: 3;
      font-size: 14px;
      font-family: NanumSquareRegular;
      line-height: 1.5;
    }
  }

  @media screen and (max-width: 767px) {
    display: grid;

    .component {
      display: grid;
      grid-template-rows: 27fr 20fr 68fr;
      grid-template-columns: 7rem;
      padding-right: 36px;
      padding-bottom: 34px;
      padding-top: 0px;
      padding-left: 0px;
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
  }
`;

const BarStyle = styled.div`
  padding-top: 7px; ;
`;

const FlexBox = styled.div`
  margin-left: 266px; // 옆에 칸 띄우기
  padding-bottom: 130px;

  .box-container {
    display: flex;
    flex-direction: row; // 옆으로 정렬
    flex-wrap: wrap; // 공간이 없을때 자동 줄바꿈
    justify-content: flex-start;
  }

  @media screen and (max-width: 1279px) {
    margin-left: 0px; // 옆에 칸 띄우기
    padding-bottom: 80px;

    .box-container {
      display: flex;
      flex-direction: row; // 옆으로 정렬
      flex-wrap: wrap; // 공간이 없을때 자동 줄바꿈
      justify-content: flex-start;
    }
  }

  @media screen and (max-width: 767px) {
    margin-left: 0px; // 옆에 칸 띄우기
    padding-bottom: 70px;

    .box-container {
      display: flex;
      flex-direction: row; // 옆으로 정렬
      flex-wrap: wrap; // 공간이 없을때 자동 줄바꿈
      justify-content: flex-start;
    }
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
    <>
      <TextBlock>Month</TextBlock>
      <div data-aos="fade-up" data-aos-duration="2000">
        <FlexBox>
          <div class="box-container">
            {months.map((month) => (
              <Month month={month} class="month-elem" />
            ))}
          </div>
        </FlexBox>
      </div>
    </>
  );
}

export default MonthList;
