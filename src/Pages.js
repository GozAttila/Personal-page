import React, { useState } from "react";

import Header from "./Header";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import BackgroundImage from "./BackgroundImage";

import bgImage1 from "./assets/img1.jpg";
import bgImage2 from "./assets/img2.jpg";
import bgImage3 from "./assets/img3.jpg";

const images = [bgImage1, bgImage2, bgImage3];
const randomImage = () => {
  return images[Math.floor(Math.random() * 3)];
};
function Pages() {
  const [navbarHeight, setNavbarHeight] = useState("50px");
  const [bgColor, setBgColor] = useState("#14151630");
  //   const [bgColor, setBgColor] = useState("#1e212830");
  const [bgImage, setBgImage] = useState(randomImage());
  const imageChanger = () => {
    let newImage = randomImage();
    while (newImage === bgImage) {
      newImage = randomImage();
    }
    setBgImage(newImage);
  };

  window.onload = function () {
    if (
      "IntersectionObserver" in window &&
      "IntersectionObserverEntry" in window &&
      "intersectionRatio" in window.IntersectionObserverEntry.prototype
    ) {
      let observerOne = new IntersectionObserver((entries) => {
        if (entries[0].boundingClientRect.y < 0) {
          setBgColor("#14151690");
          setNavbarHeight("50px");
        } else {
          setBgColor("#14151630");
          setNavbarHeight("80px");
        }
      });
      let observerTwo = new IntersectionObserver((entries) => {
        if (entries[0].boundingClientRect.y < 0) {
          console.log("imagechange");
          imageChanger();
        }
      });
      observerOne.observe(document.querySelector("#anchorOne"));
      observerTwo.observe(document.querySelector("#anchorTwo"));
    }
  };

  return (
    <>
      <Header bgColor={bgColor} navbarHeight={navbarHeight} />
      <SectionOne bgImage={bgImage} />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      {/* <div id="testthree" className="testdiv three">
        This is test three
      </div> */}
      {/* <div id="testfour" className="testdiv four">
        This is test four
      </div> */}

      <BackgroundImage />
    </>
  );
}

export default Pages;
