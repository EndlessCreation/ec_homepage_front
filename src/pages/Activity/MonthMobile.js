import React from "react";
import styled from "styled-components";
import WrapperMobile from "./WrapperMobile";

const MonthGridMobile = styled.div`
  display: grid;

  .component {
    display: grid;
    grid-template-rows: 27fr 35fr 68fr;
    grid-template-columns: 6rem;
    padding: 5px;
    padding-bottom: 20px; 
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
  const months = [
    {
      name: "January",
      detail1: "월별활동 설명글하나",
      detail2: "월별활동 설명글",
      detail3: "월별활동 설명글",
    },

    {
      name: "February",
      detail1: "월별활동 설명글",
      detail2: "월별활동 설명글",
      detail3: "월별활동 설명글",
    },
    {
      name: "March",
      detail1: "월별활동 설명글",
      detail2: "월별활동 설명글",
      detail3: "월별활동 설명글",
    },
    {
      name: "April",
      detail1: "월별활동 설명글하나둘셋",
      detail2: "월별활동 설명글",
      detail3: "월별활동 설명글",
    },
    {
      name: "May",
      detail1: "월별활동 설명글",
      detail2: "월별활동 설명글",
      detail3: "월별활동 설명글",
    },
    {
      name: "June",
      detail1: "월별활동 설명글",
      detail2: "월별활동 설명글",
      detail3: "월별활동 설명글",
    },
    {
      name: "July",
      detail1: "월별활동 설명글",
      detail2: "월별활동 설명글",
      detail3: "월별활동 설명글",
    },

    {
      name: "August",
      detail1: "월별활동 설명글",
      detail2: "월별활동 설명글",
      detail3: "월별활동 설명글",
    },
    {
      name: "September",
      detail1: "월별활동 설명글",
      detail2: "월별활동 설명글",
      detail3: "월별활동 설명글",
    },
    {
      name: "October",
      detail1: "월별활동 설명글",
      detail2: "월별활동 설명글",
      detail3: "월별활동 설명글",
    },
    {
      name: "November",
      detail1: "월별활동 설명글",
      detail2: "월별활동 설명글",
      detail3: "월별활동 설명글",
    },
    {
      name: "December",
      detail1: "월별활동 설명글",
      detail2: "월별활동 설명글",
      detail3: "월별활동 설명글",
    },
  ];

  return (
    <WrapperMobile background={"#e3dfde"} title="Monthly">
      <FlexBox>
        <div class="box-container">
          {months.map((month) => (
            <Month month={month} class="month-elem" />
          ))}
        </div>
      </FlexBox>
    </WrapperMobile>
  );
}

export default MonthListMobile;
