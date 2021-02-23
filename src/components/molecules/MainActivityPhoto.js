import React, { useEffect } from "react";
import styled from "styled-components";
import PhotoBox from "../atoms/MainPhotoBox";
import {
  useExecutiveState,
  useExecutiveDispatch,
  getMainactivty,
} from "../../context/MainContext";

const PhotoBlock = styled.div`
  width: 498px;
  height: 683px;
  grid-column: 2 / 3;
  grid-row: 1 / -1;
  overflow: hidden;
  background-color: #fff;
  display: inline-block;
  .Photo {
    width: 520px;
    height: 100%;
    overflow-y: scroll;
    div:nth-child(1) {
      margin-top: 220px;
    }
  }
  @media screen and (max-width: 1279px) {
    width: 400px;
    grid-row: 2/ 3;
    height: 739px;
    .Photo {
      width: 432px;
      div:nth-child(1) {
        margin-top: 0px;
      }
    }
  }
  @media screen and (max-width: 767px) {
    width: 182px;
    grid-row: 2/ 3;

    height: 634px;
    .Photo {
      width: 204px;

      div:nth-child(1) {
        margin-top: 0px;
      }
    }
  }
`;
function ActivityPhoto() {
  const state = useExecutiveState();
  const dispatch = useExecutiveDispatch();
  const { data: mainactivity, loading, error } = state.mainactivity;

  useEffect(() => {
    getMainactivty(dispatch);
  }, [dispatch]);
  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!mainactivity) return null;

  return (
    <PhotoBlock>
      <div className="Photo" >
        {mainactivity.map((photo, index) => (
          <PhotoBox url={photo.imageUrl} key={index} />
        ))}
      </div>
    </PhotoBlock>
  );
}

export default ActivityPhoto;
