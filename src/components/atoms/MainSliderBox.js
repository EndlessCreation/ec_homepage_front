import React, { useCallback } from "react";
import styled from "styled-components";
import { useGlobalDispatch } from "../../context/GlobalContext";

const SlideBlock = styled.div`
  width: 49.4%;
  height: 100%;
  background-color: #fff;
  margin-left: 16px;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 1279px) {
    width: 95%;
    height: 46%;
    margin-bottom: 16px;
    margin-left: 0px;
    margin-right: 16px;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;
function SliderBox({ id, url }) {
  const GlobalDispatch = useGlobalDispatch();

  const changeid = useCallback(() => {
    GlobalDispatch({
      type: "CHANGE_ID",
      id,
    });
  }, [id]);

  const openModal = useCallback(() => {
    GlobalDispatch({
      type: "MODAL_OPEN",
    });
  }, []);

  function ClickEvent(id) {
    openModal();
    changeid(id);
  }
  return (
    <SlideBlock onClick={useCallback(() => ClickEvent(id), [id])}>
      <img src={url} alt="ECPick"></img>
    </SlideBlock>
  );
}

export default React.memo(SliderBox);
