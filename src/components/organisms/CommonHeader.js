import React from "react";
import styled from "styled-components";
import ForMainText from "../atoms/CommonHeaderSmallText";
import ForIntroText from "../atoms/CommonHeaderBigText";
// import AOS from 'aos';
import "aos/dist/aos.css";
// AOS.init();
const Block = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;

  background-image: url(${(props) => props.Url});
  background-size: cover;
`;

const Container = styled.div`
  box-sizing: border-box;

  @media screen and (min-width: 1280px) {
    width: 1200px;
    margin: 0 auto;

    padding-left: 263px;
    padding-top: 254px;
    padding-bottom: 130px;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 608px;
    margin: 0 auto;
    height: 386px;
    padding-top: 180px;
    padding-bottom: 80px;
  }

  @media screen and (max-width: 767px) {
    width: 304px;
    margin: 0 auto;
    height: 389px;
    padding-top: 196px;
    padding-bottom: 72px;
  }
`;

function IntroContainer({ main, intro, intro2, Url }) {
  return (
    <Block Url={Url}>
      <Container>
        <div data-aos="fade-right" data-aos-duration="1000">
          <ForMainText>{main}</ForMainText>
        </div>
        <ForIntroText>
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            {intro} <br></br>
            {intro2}
          </div>
        </ForIntroText>
      </Container>
    </Block>
  );
}

export default IntroContainer;
