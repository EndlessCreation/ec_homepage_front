import React from "react";
import styled from "styled-components";
import Size from "../../Size";

const Img = styled.div`
  position: relative;
  width: 180px;
  height: 180px;
  background: #d0d0d0 0% 0% no-repeat padding-box;
  border-radius: 80px;
  opacity: 1;

  @media only screen and ${Size.device.tablet} {
    width: 117px;
    height: 117px;
    background: #d0d0d0 0% 0% no-repeat padding-box;
    border-radius: 51px;
    opacity: 1;
  }

  @media only screen and ${Size.device.moblie} {
    width: 114px;
    height: 114px;
    background: #d0d0d0 0% 0% no-repeat padding-box;
    border-radius: 48px;
    opacity: 1;
  }
`;

//파트장 Img
const Part = styled.div`
  position: relative;
  width: 36px;
  height: 36px;
  background: #232323;
  border-radius: 83px;
  opacity: 1;
  z-index: 5;
  display: block;
  align-items: center;
  justify-content: center;

    font-family: Kanit;
    font-size: 24px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.46;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;

  @media only screen and ${Size.device.tablet} {
    width: 30px;
    height: 30px;

    font-family: Kanit;
    font-size: 20px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.46;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
  }

  @media only screen and ${Size.device.moblie} {
    width: 26px;
    height: 26px;

    font-family: Kanit;
    font-size: 18px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.46;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
  }
`;

//하나의 항목의 block 스타일링
const ManaInfoBlock = styled.div`
  width: 408px;
  height: 232px;
  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;
  margin-bottom: 16px;

  @media screen and ${Size.device.tablet} {
    width: 295px;
    height: 155px;
    background: #ffffff 0% 0% no-repeat padding-box;
    opacity: 1;
    margin-bottom: 16px;
  }

  @media screen and ${Size.device.moblie} {
    width: 304px;
    height: 151px;
    background: #ffffff 0% 0% no-repeat padding-box;
    opacity: 1;
    margin-bottom: 16px;
  }
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  width: 350px;

  padding-bottom: 28px;
  padding-left: 24px;
  padding-top: 24px;
  padding-right: 24px;

  @media screen and ${Size.device.tablet} {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    width: 270px;

    padding-bottom: 22px;
    padding-left: 16px;
    padding-top: 16px;
  }

  @media screen and ${Size.device.moblie} {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    width: 227px;

    padding-bottom: 21px;
    padding-left: 16px;
    padding-top: 16px;
  }
`;

//항목의 text부분
const TextBox = styled.div`
  width: 130px;
  padding-left: 28px;

  @media screen and ${Size.device.tablet} {
    width: 100px;
    padding-left: 21px;
  }

  @media screen and ${Size.device.moblie} {
    width: 94px;
    padding-left: 19px;
  }
`;

const Name = styled.span`
  font-family: NanumSquareB;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.13;
  letter-spacing: normal;
  text-align: left;
  color: #101010;

  @media screen and ${Size.device.tablet} {
    font-family: NanumSquareB;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.17;
    letter-spacing: normal;
    text-align: left;
    color: #101010;
  }

  @media screen and ${Size.device.moblie} {
    font-family: NanumSquareB;
    font-size: 1.125rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.17;
    letter-spacing: normal;
    text-align: left;
    color: #101010;
  }
`;

const Grad = styled.span`
  padding-left: 8px;
  padding-top: 2px;
  vertical-align: left;
  font-family: NanumSquareR;
  font-size: 21px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: left;
  color: #232323;

  @media screen and ${Size.device.tablet} {
    padding-left: 9px;
    padding-top: 2px;
    font-family: NanumSquareR;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: normal;
    text-align: left;
    color: #232323;
  }

  @media screen and ${Size.device.moblie} {
    padding-left: 5px;
    padding-top: 2px;
    font-family: NanumSquareR;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: normal;
    text-align: left;
    color: #232323;
  }
`;
const Gap = styled.div`
  height: 18px;

  @media screen and ${Size.device.tablet} {
    height: 9px;
  }

  @media screen and ${Size.device.moblie} {
    height: 9px;
  }
`;
const Position = styled.span`
  font-family: NanumSquareR;
  font-size: 21px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: left;
  color: #232323;

  @media screen and ${Size.device.tablet} {
    font-family: NanumSquareR;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: normal;
    text-align: left;
    color: #232323;
  }

  @media screen and ${Size.device.moblie} {
    font-family: NanumSquareR;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: normal;
    text-align: left;
    color: #232323;
  }
`;

const Hashtag = styled.div`
  font-family: NanumSquareR;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.81;
  letter-spacing: normal;
  text-align: left;
  color: #232323;

  @media screen and ${Size.device.tablet} {
    font-family: NanumSquareR;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: left;
    color: #232323;
  }

  @media screen and ${Size.device.moblie} {
    font-family: NanumSquareR;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: left;
    color: #232323;
  }
`;

function Managers({ mana }) {
  return (
    <ManaInfoBlock>
      <InfoBox>
        <Img>
          {(function () {
            if (mana.part) return <Part>P</Part>;
          })()}
        </Img>
        <TextBox>
          <Name>{mana.name}</Name>
          <Grad>{mana.grad}</Grad>
          <Gap />
          <Position>{mana.position}</Position> <Gap />
          <Hashtag>{mana.hash1}</Hashtag>
          <Hashtag>{mana.hash2}</Hashtag>
          <Hashtag>{mana.hash3}</Hashtag>
        </TextBox>
      </InfoBox>
    </ManaInfoBlock>
  );
}

function ManagerInfo() {
  const Manager = [
    {
      id: 1,
      name: "김건훈",
      grad: "27기",
      position: "회장",
      hash1: "#ABCDEFGHIJKLM",
      hash2: "#해시태그그그그",
      hash3: "#해시태그그그그",
      part: true,
    },
    {
      id: 2,
      name: "조인혁",
      grad: "27기",
      position: "부회장",
      hash1: "#해시태그",
      hash2: "#해시태그",
      part: true,
    },
    {
      id: 3,
      name: "조재영",
      grad: "28기",
      position: "사무부장",
      hash1: "#해시태그",
      hash2: "#해시태그",
      hash3: "#해시태그",
      part: true,
    },
    {
      id: 4,
      name: "김선휘",
      grad: "27기",
      position: "학술부장",
      hash1: "#해시태그",
      part: false,
    },
    {
      id: 5,
      name: "오예진",
      grad: "29기",
      position: "인사부장",
      hash1: "#해시태그",
      part: false,
    },
    {
      id: 6,
      name: "마경미",
      grad: "29기",
      position: "홍보부장",
      hash1: "#해시태그",
      part: false,
    },
    {
      id: 7,
      name: "심연화",
      grad: "29기",
      position: "정보부장",
      hash1: "#해시태그",
      part: false,
    },
  ];

  return (
    <>
      {Manager.map((mana) => (
        <Managers mana={mana} />
      ))}
    </>
  );
}

export default ManagerInfo;
