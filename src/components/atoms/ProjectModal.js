import React, { useEffect } from "react";
import "./ProjectModal.css";
import styled from "styled-components";
import {
  getProjectData,
  useECDispatch,
  useECState,
} from "../../context/Context";

const Header = styled.header`
  width: 131px;
  height: 31px;
  font-family: Kanit;
  font-size: 21px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.48;
  letter-spacing: normal;
  text-align: left;
  color: #101010;
`;

const Text = styled.div`
  font-family: NanumSquareBold;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.13;
  letter-spacing: normal;
  text-align: left;
  color: #101010;
  padding-top: 3px;
  padding-right: ${(props) => props.padding}px;
`;

const Box = styled.div`
  width: 456px;
  font-family: NanumSquareRegular;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: normal;
  text-align: left;
  color: #232323;
`;

const ModalContainer = styled.div`
  width: 560px;
  display: inline-flex;
  padding-bottom: 24px;
`;

function Modal({ open, close, header }) {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴

  const state = useECState();
  const dispatch = useECDispatch();
  const { data: projectData, loading, error } = state.project;

  useEffect(() => {
    getProjectData(dispatch);
  }, [dispatch]);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!projectData) return null;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <Header>
            {header}
            <button className="close" onClick={close}>
              {" "}
              &times;{" "}
            </button>
          </Header>
          <main>
            <ModalContainer>
              <Text padding={42}>작품 설명</Text>
              <Box>{projectData.description} </Box>
            </ModalContainer>
            <ModalContainer>
              <Text padding={42}>참여 인원</Text>
              <Box>
                참여 인원 및 프로젝트 role
                <br /> 참여 인원 및 프로젝트 role
                <br /> 참여 인원 및 프로젝트 role
              </Box>
            </ModalContainer>
            <ModalContainer>
              <Text padding={60}>활동명</Text>
              <Box>{projectData.event}</Box>
            </ModalContainer>
            <ModalContainer>
              <Text padding={75}>기간</Text>
              <Box>
                {projectData.startDate} ~ {projectData.endDate}
              </Box>
            </ModalContainer>
            <ModalContainer>
              <Text padding={46}>기술스택</Text>
              <Box>
                {projectData.techStack}기술스택 <br /> 기술스택
              </Box>
            </ModalContainer>
            <ModalContainer>
              <Text padding={46}>발표자료</Text>
              <Box>{projectData.presentationUrl}</Box>
            </ModalContainer>
            <ModalContainer>
              <Text padding={55}>github</Text>
              <Box>{projectData.githubUrl}</Box>
            </ModalContainer>
          </main>
        </section>
      ) : null}
    </div>
  );
}

export default Modal;
