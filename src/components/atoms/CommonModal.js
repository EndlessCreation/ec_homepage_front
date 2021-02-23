import React, { useEffect, useCallback } from "react";
import styled from "styled-components";
import { useGlobalState, useGlobalDispatch } from "../../context/GlobalContext";
import {
  useECState,
  useECDispatch,
  getProjectData,
} from "../../context/Context";
const Block = styled.div`
  display: block;
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
  margin: 20px auto;
  background-color: #fff;
`;
const Header = styled.div`
  width: 100%;
  height: 71px;
  box-sizing: border-box;
  padding-left: 24px;
  padding-right: 24px;
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
`;
const ImgBlock = styled.div`
  width: 560px;
  height: 420px;
  background-color: #f2f2f2;
  margin-bottom: 21px;
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
`;
const TextContainer = styled.div`
  width: 560px;
  padding-bottom: 24px;
  display: flex;
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
  }, []);

  const state = useECState();
  const dispatch = useECDispatch();
  const { data: projectData, loading, error } = state.projectData;
  useEffect(() => {
    console.log(projectData);
    getProjectData(dispatch, id);
  }, [dispatch, id]);

  if (loading) return <div>로딩중..</div>;
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
                <Box>{projectData.description}</Box>
              </TextContainer>
              <TextContainer>
                <Text>참여인원</Text>
                <Box>
                  {projectData.participantResponses.map((data) => (
                    <div>{data.name}</div>
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
                    target="blank"
                  >
                    {projectData.presentationUrl}
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
                    {projectData.githubUrl}
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
