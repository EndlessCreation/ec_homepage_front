import React from "react";
import styled from "styled-components";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const VideoBlock = styled.div`
  background-color: #dddddd;
  /*  width: 70%;
  height: 39.75%;
 */
  width: 848px;
  height: 477px;
  margin-left: 22.16%;
  margin-right: 7%;
  @media screen and (max-width: 1279px) {
    width: 100%;
    height: 342px;
    margin-left: 0;
    margin-right: 0;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    height: 171px;
  }
`;

function AboutEcVideo() {
  return (

    <div data-aos="fade-up"  data-aos-duration="600" >
    <VideoBlock>
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/6QosveEmeqg"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </VideoBlock>
    </div>
  );
}

export default AboutEcVideo;
