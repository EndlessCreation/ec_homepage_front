import React from "react";
import PhotoList from "../molecules/ActivityPhotoList";
import TextBlock from "../molecules/CommonSubTextContents";

// import AOS from "aos";
import "aos/dist/aos.css";
// AOS.init();

function ActivityPhoto() {
  return(
    <>
      <TextBlock>Photo</TextBlock>
      <div data-aos="fade-up" data-aos-duration="2000">
        <PhotoList />
      </div>
    </>
  );
}

export default React.memo(ActivityPhoto);
