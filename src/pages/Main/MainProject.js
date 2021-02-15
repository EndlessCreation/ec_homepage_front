<<<<<<< HEAD
import React, { useState } from "react";
import styled, { css } from "styled-components";

const MainProjectConatiner = styled.div`
  max-width: 1280px;
  box-sizing: border-box;
  padding: 0 40px;
  margin: 0 auto;
  height: 752px;
  display: grid;
  grid-template-columns: 121fr 146fr 349fr 498fr 86fr;
  grid-template-rows: 254fr 378fr 120fr;
  .MainProjectLeft {
    width: 121px;
    position: sticky;
    top: 120px;
    height: 48px;
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
    font-size: 32px;
    font-family: Kanit;
    font-weight: bold;
    line-height: 48px;
    margin-top: 100px;
  }
  .MainToProject {
    display: block;
    text-decoration: none;
    font-size: 16px;
    font-family: NanumSquareR;
    line-height: 18px;
    color: #afafaf;
    margin-top: 13px;
  }
  .MainProjectTop {
    grid-column: 3 / span 2;
    grid-row: 1 / span 1;
    font-family: NanumSquareR;
    font-size: 18px;
    line-height: 34px;
    color: #101010;
    margin-top: 113px;
  }
  .MainSliderShow {
    grid-column: 3 / span 2;
    grid-row: 2 / span 1;
    overflow: hidden;
  }
  .Slides {
    display: flex;
    width: 200%;
    height: 80%;
    margin: 0;
    background-color: #afafaf;
  }
  .Slider {
    display: flex;
    width: 50%;
    height: 100%;
    padding: 0;
    margin-top: 0;
    transition: 0.7s;
    opacity: 0;
  }
  .Slides div:nth-child(2) {
    margin-left: 32px;
  }
  .s1 div {
    width: 48%;
    height: 100%;
    background: tomato;
  }
  .s2 div {
    width: 48%;
    height: 100%;
    background: tomato;
  }
  #r1:checked ~ .s1 {
    margin-left: 0;
    opacity: 1;
  }
  #r2:checked ~ .s2 {
    margin-left: -50%;
    opacity: 1;
  }

  .Navigation {
    display: flex;
    float: right;
    width: 180px;
    margin-top: 66px;
    justify-content: space-between;
  }
  .Bar {
    width: 10%;
    height: 6px;
    margin-left: 10px;
    cursor: pointer;
    transition: 0.4s;
    background: #afafaf;
  }
  .Bar:hover {
    background: #232323;
    width: 60%;
  }
  input[name="r"] {
    position: absolute;
    visibility: hidden;
  }
`;

function MainProject() {
  return (
    <MainProjectConatiner>
      <div className="MainProjectLeft">
        Project
        <a href="#" className="MainToProject">
          View Detail -
        </a>
      </div>
      <div className="MainProjectTop">
        31기수에 이르기까지 그동안 EC 선배들이 했던 프로젝트들이에요!
        <br /> 너무 많아서 몇 가지만 골라봤어요
      </div>
      <div className="MainSliderShow">
        <div className="Slides">
          <input type="radio" name="r" id="r1" checked />
          <input type="radio" name="r" id="r2" />
          <input type="radio" name="r" id="r3" />
          <div className="Slider s1">
            <div>영역1</div>
            <div>영역2</div>
          </div>
          <ul className="Slider s2">
            <div>영역3</div>
            <div>영역4</div>
          </ul>
        </div>
        <div className="Navigation">
          <label class="Bar active" for="r1"></label>
          <label class="Bar" for="r2"></label>
          <label class="Bar" for="r3"></label>
        </div>
      </div>
    </MainProjectConatiner>
=======
import React from "react";
import styled from "styled-components";

import ProjectTextBox from "../../Components/organisms/ProjectTextBox";
import ProjectContents from "../../Components/organisms/ProjectContents";
const ProjectBlock = styled.div`
  width: 100%;
  height: 752px;
  margin: 0;
  padding: 0;
  background-color: #f2f2f2;
  @media screen and (max-width: 1279px) {
    height: 846px;
  }
  @media screen and (max-width: 767px) {
    height: 841px;
  }
`;

const ProjectContainer = styled.div`
  max-width: 1280px;
  height: 100%;
  padding-left: 40px;
  padding-right: 40px;
  margin: 0 auto;
  box-sizing: border-box;
  @media screen and (max-width: 1279px) {
    max-width: 640px;
    padding-left: 16px;
    padding-right: 16px;
  }
  @media screen and (max-width: 767px) {
    max-width: 320px;
    padding-left: 8px;
    padding-right: 8px;
  }
`;
function MainProject() {
  return (
    <ProjectBlock>
      <ProjectContainer>
        <ProjectTextBox />
        <ProjectContents />
      </ProjectContainer>
    </ProjectBlock>
>>>>>>> 587162f714bc9f29704b543a3352e4d42395d674
  );
}

export default MainProject;
