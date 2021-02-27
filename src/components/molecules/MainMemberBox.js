import React, { useEffect } from "react";
import styled from "styled-components";
import MemberItem from "../atoms/MainMemberItem";

import { Position } from "../../context/PositionMapping";
import { useECState, useECDispatch, getExecutive } from "../../context/Context";

import Loader from "../atoms/CommonLoader";
const MemberBlock = styled.div`
  max-width: 880px;
  height: 408px;
  display: grid;
  grid-gap: 32px;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  grid-template-rows: 180px 180px;
  @media screen and (max-width: 1279px) {
    max-width: 638px;
    height: 296px;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    grid-template-rows: 140px 140px;
    grid-gap: 16px;
  }
  @media screen and (max-width: 767px) {
    max-width: 304px;
    height: auto;
    grid-template-columns: repeat(auto-fit, minmax(144px, 1fr));
    grid-template-rows: 144px 144px;
    grid-gap: 16px;
  }
`;

function MainMemberBox() {
  const state = useECState();
  const dispatch = useECDispatch();
  const { data: executive, loading, error } = state.executive;

  useEffect(() => {
    getExecutive(dispatch);
  }, [dispatch]);
  if (loading) return <Loader />;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!executive) return null;

  return (
    <MemberBlock>
      {executive.map((Member, index) => (
        <div data-aos="flip-right" key={Member.name}>
          <MemberItem
            HashTag={Member.hashTags}
            name={Member.name}
            imageUrl={Member.imageUrl}
            position={Position[Member.position]}
          />
        </div>
      ))}
    </MemberBlock>
  );
}

export default MainMemberBox;
