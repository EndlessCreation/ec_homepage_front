import React, { useEffect, useCallback } from "react";
import styled from "styled-components";
import { useGlobalState, useGlobalDispatch } from "../../context/GlobalContext";
import Loader from "./CommonLoader";
import {
  useECState,
  useECDispatch,
  getProjectData,
} from "../../context/Context";
const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background: rgb(25, 25, 25, 0.64);
  overflow-y: scroll;
`;

const ModalBlock = styled.div`
  width: 608px;
  background-color: #fff;

  @media screen and (max-width:767px)
  {
    width:336px;
  }
`;
const Header = styled.div`
  width: 100%;
  height: 71px;
  box-sizing: border-box;
  padding-left: 24px;
  padding-right: 24px;

  @media screen and (max-width:767px){
    height:64px;
    padding-left:16px;
    padding-right:16px;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Kanit;
  font-size: 21px;
  font-weight: bold;
  line-height: 1.48;
  color: #101010;
  border-bottom: 1px solid #dee2e6;
  .button {
    position: relative;
    width: 25px;
    height: 25px;
    cursor: pointer;
    span {
      position: absolute;
      height: 2px;
      width: 20px;
      border-radius: 7px;
      background-color: #b0b0b0;
      top: 10px;
      right: 5px;
    }
    span:nth-child(1) {
      transform: rotate(-45deg);
    }
    span:nth-child(2) {
      transform: rotate(45deg);
    }
  }
`;
const Content = styled.div`
  padding: 24px;

  @media screen and (max-width:767px){
    padding:16px;
  }
`;
const ImgBlock = styled.div`
  width: 560px;
  height: 420px;
  background-color: #f2f2f2;
  margin-bottom: 21px;

  @media screen and (max-width:767px){
    width:304px;
    height:228px;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;
const Text = styled.div`
  width: 104px;
  font-family: NanumSquareBold;
  font-size: 16px;
  line-height: 1.13;
  letter-spacing: normal;
  text-align: left;
  color: #101010;

`;
const Box = styled.div`
  width: 456px;
  font-family: NanumSquareRegular;
  font-size: 14px;
  line-height: 1.71;
  color: #232323;


  @media screen and (max-width:767px){
    padding-top:16px;
    width: 100%;
  }
`;

const Textfor=styled.pre`
{
  width:100%;
  height:100%;  
  margin:0;
  font-family: NanumSquareRegular;
  font-size: 14px;
  white-space: pre-wrap; /* CSS3*/
  white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
  white-space: -pre-wrap; /* Opera 4-6 */
  white-space: -o-pre-wrap; /* Opera 7 */
  word-wrap: break-all; /* Internet Explorer 5.5+ */ 
  }
`;

const TextContainer = styled.div`
  width: 560px;
  padding-bottom: 24px;
  display: flex;

  @media screen and (max-width:767px){
    width:304px;
    display:block;
  }
`;
function CommonModal() {
  const State = useGlobalState();
  const GlobalDispatch = useGlobalDispatch();
  const ModalState = State.ModalState;
  const id = State.id;

  const closeModal = useCallback(() => {
    GlobalDispatch({
      type: "MODAL_CLOSE",
    });
  }, [GlobalDispatch]);

  const state = useECState();
  const dispatch = useECDispatch();
  const { data: projectData, loading, error } = state.projectData;
  useEffect(() => {
    getProjectData(dispatch, id);
  }, [dispatch, id]);

  if (loading)
    return (
      <div>
        <Loader />
      </div>
    );
  if (error) return <div>에러가 발생했습니다</div>;
  if (!projectData) return null;

  const startdate = new Date(projectData.startDate);
  const endDate = new Date(projectData.endDate);
  return (
    <>
      {ModalState && (
        <Block State={ModalState}>
          <ModalBlock>
            <Header>
              <div>{projectData.name}</div>
              <div className="button" onClick={closeModal}>
                <span></span>
                <span></span>
              </div>
            </Header>
            <Content>
              <ImgBlock>
                <img src={projectData.imageUrl} alt="마경미"></img>
              </ImgBlock>
              <TextContainer>
                <Text>작품설명</Text>
                <Box><Textfor>{projectData.description}</Textfor></Box>
              </TextContainer>
              <TextContainer>
                <Text>참여인원</Text>
                <Box>
                  {projectData.participantResponses.map((data) => (
                    <div>{data.name} {data.role}</div>
                  ))}
                </Box>
              </TextContainer>
              <TextContainer>
                <Text>활동명</Text>
                <Box>{projectData.event}</Box>
              </TextContainer>
              <TextContainer>
                <Text>기간</Text>
                <Box>
                  {endDate.getFullYear()}년 {endDate.getMonth() + 1}월 ~
                  {startdate.getFullYear()}년 {startdate.getMonth() + 1}월
                </Box>
              </TextContainer>
              <TextContainer>
                <Text>기술스택</Text>
                <Box>
                  {projectData.techStack.map((data) => (
                    <div>{data}</div>
                  ))}
                </Box>
              </TextContainer>
              <TextContainer>
                <Text>발표자료</Text>
                <Box>
                  <a
                    style={{ textDecoration: "none", color: "black" }}
                    href={projectData.presentationUrl}
                    width="100%"
                    target="blank"
                  >
                    [발표링크 바로가기]
                  </a>
                </Box>
              </TextContainer>
              <TextContainer>
                <Text>github</Text>
                <Box>
                  <a
                    style={{ textDecoration: "none", color: "black" }}
                    href={projectData.githubUrl}
                    target="blank"
                  >
                    [github 바로가기]]
                  </a>
                </Box>
              </TextContainer>
            </Content>
          </ModalBlock>
        </Block>
      )}
    </>
  );
}

export default CommonModal;
