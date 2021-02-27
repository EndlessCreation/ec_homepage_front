import React from "react";
import styled from "styled-components";

import ActivityTitle from "../atoms/MainActivityTitle";
import List from "../atoms/MainList";

const Block = styled.div`
  @media screen and (max-width: 1279px) {
    display: flex;
    flex-direction: column;
  }
`;
const ListBlock = styled.div`
  width: 110px;
  height: 100%;
  display: inline-block;

  @media screen and (max-width: 1279px) {
    width: 100px;
    margin-bottom: 48px;
  }
  @media screen and (max-width: 767px) {
    margin-bottom: 48px;
  }
`;
const List1 = [
  "신입생 스터디",
  "희망 스터디 개설",
  "재학생 세미나",
  "졸업생 세미나",
  "EC어드벤스",
  "팀별 공모전",
  "개발 컨퍼런스",
];
const List2 = [
  "신입생 환영회",
  "봄 소풍 및 M.T.",
  "스승의 날",
  "창립기념일",
  "동아리 회식",
  "겨울 M.T.",
  "매달 생일 챙겨줌",
];
function ActivityList() {
  return (
    <Block>
      <ListBlock className="first">
        <ActivityTitle>잘 하는데</ActivityTitle>
        {List1.map((list, index) => (
          <List Text={list} key={index} />
        ))}
      </ListBlock>
      <ListBlock className="second">
        <ActivityTitle>잘 놀기까지</ActivityTitle>
        {List2.map((list, index) => (
          <List Text={list} key={index} />
        ))}
      </ListBlock>
    </Block>
  );
}

export default React.memo(ActivityList);
