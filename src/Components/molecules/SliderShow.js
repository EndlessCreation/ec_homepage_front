import React, { useEffect } from "react";
import styled, { css } from "styled-components";

import SliderInput from "../atoms/SliderInput";
import SliderBoxs from "./SliderBoxs";
import SliderBox from "../atoms/SliderBox";
import SliderLabel from "../atoms/SliderLabel";
import {
  useExecutiveState,
  useExecutiveDispatch,
  getEcpick,
} from "../../Context/MainContext";

//실제 서버에서 프로젝트 갯수를 받아올 예정
const ecpickcount = 5;
// 슬라이더의 라벨은 프로젝트 숫자 /2 + 1 이라는 갯수가 되어야 함..
export const labelcount = [];
for (let i = 1; i <= ecpickcount / 2 + 1; i++) {
  labelcount.push(i);
}

const SliderBlockWidth = labelcount.length * 100;

const width = SliderBlockWidth + "%";

const SlideBlock = styled.div`
  width: ${width};
  height: 306px;
  display: flex;
  background-color: #f2f2f2;
`;
const LabelBlock = styled.div`
  display: flex;
  float: right;
  width: 180px;
  margin-top: 66px;
  justify-content: space-between;
`;

function division(arr) {
  const len = arr.length;
  const cnt = Math.floor(len / 2);
  const tmp = [];
  for (var i = 0; i <= cnt * 2; i++) {
    tmp.push(arr.slice(i, i + 2));
    i++;
  }
  return tmp;
}

function SliderShow() {
  console.log("슬라이드시작됨");
  const state = useExecutiveState();
  const dispatch = useExecutiveDispatch();
  const { data: ecpick, loading, error } = state.ecpick;
  useEffect(() => {
    getEcpick(dispatch);
  }, [dispatch]);
  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!ecpick) return null;

  const NewArrary = division(ecpick);
  console.log(NewArrary);
  console.log(ecpick);

  return (
    <>
      <SlideBlock>
        {ecpick.map((data, index) => (
          <SliderInput id={data.id} key={index} />
        ))}
        {NewArrary.map((data, index) => (
          <SliderBoxs key={index}>
            {data.map((d) => (
              <SliderBox key={d.id} />
            ))}
          </SliderBoxs>
        ))}
      </SlideBlock>
      <LabelBlock>
        {labelcount.map((data, index) => (
          <SliderLabel id={data} key={index} />
        ))}
      </LabelBlock>
    </>
  );
}

export default SliderShow;
