import React from "react";
import styled from "styled-components";

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
  const months = [
    {
      name: "January",
      detail1: "겨울 M.T.",
      // detail2: "월별활동 설명글",
      // detail3: "월별활동 설명글",
    },

    {
      name: "February",
      detail1: "졸업식",
      // detail2: "월별활동 설명글",
      // detail3: "월별활동 설명글",
    },
    {
      name: "March",
      detail1: "신입생 모집",
      detail2: "신입생 O.T.",
      detail3: "EC) Basic",
    },
    {
      name: "April",
      detail1: "랜선 술파티",
      detail2: "파트별 세미나",
      detail3: "중간고사",
    },
    {
      name: "May",
      detail1: "파트별 스터디",
      detail2: "스승의날 행사",
      // detail3: "월별활동 설명글",
    },
    {
      name: "June",
      detail1: "기말고사",
      detail2: "IdeaTon",
      // detail3: "월별활동 설명글",
    },
    {
      name: "July",
      detail1: "어드밴스 팀빌딩",
      detail2: "교내 해커톤 개최",
      // detail3: "월별활동 설명글",
    },

    {
      name: "August",
      detail1: "어드밴스 시작발표",
      detail2: "여름 M.T.",
      detail3: "월별활동 설명글",
    },
    {
      name: "September",
      detail1: "EC 창립기념일",
      detail2: "개강파티",
      detail3: "어드밴스  중간발표",
    },
    {
      name: "October",
      detail1: "중간고사",
      // detail2: "월별활동 설명글",
      // detail3: "월별활동 설명글",
    },
    {
      name: "November",
      detail1: "어드밴스 최종발표",
      // detail2: "월별활동 설명글",
      // detail3: "월별활동 설명글",
    },
    {
      name: "December",
      detail1: "동아리 해커톤",
      detail2: "회장 선출",
      // detail3: "월별활동 설명글",
    },
];

  return (
    <>
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
