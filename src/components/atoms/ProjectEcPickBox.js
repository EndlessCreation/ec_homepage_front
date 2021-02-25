import React, { useCallback } from "react";
import styled from "styled-components";
import { useGlobalDispatch } from "../../context/GlobalContext";

const BoxforEcPick=styled.div`
@media screen and (min-width:1280px){
    width:408px;
    height:306px;
    opacity: 1;
    cursor:pointer;
s}
    @media screen and (max-width:1279px){
    width:288px;
    height:216px;
    background:#FFFFFF;
    margin-bottom:16px;
    cursor:pointer;
    }
`;


function EcPickBox({project}){
    const GlobalDispatch = useGlobalDispatch();
    const id=project.id;

  const changeid = useCallback(() => {
    GlobalDispatch({
      type: "CHANGE_ID",
      id,
    });
  }, []);

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
        <BoxforEcPick onClick={() => ClickEvent(project.id)}>
      <img src={project.imageUrl} alt={project.id} width="100%" height="100%"></img>
    </BoxforEcPick>
    );
}
export default EcPickBox;