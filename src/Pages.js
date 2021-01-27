import React, { useState, useEffect } from "react";

import Header from "./Header";
import SectionOne from "./SectionOne";

import bgImage1 from "./assets/img1.jpg";
import bgImage2 from "./assets/img2.jpg";
import bgImage3 from "./assets/img3.jpg";

const images = [bgImage1, bgImage2, bgImage3];
const randomImage = () => {
  return images[Math.floor(Math.random() * 3)];
};
function Pages() {
  const [bgColor, setBgColor] = useState("#1e212890");
  const [bgImage, setBgImage] = useState(randomImage());
  const imageChanger = () => {
    let newImage = randomImage();
    while (newImage === bgImage) {
      newImage = randomImage();
    }
    setBgImage(newImage);
  };

  //   window.addEventListener("scroll", function () {
  //     if (document.documentElement.scrollTop > 80) {
  //       console.log("Window scroll is over 80");
  //       //   setBgColor("#1e212830");
  //     }
  //     if (document.documentElement.scrollTop > 100) {
  //       console.log("Window scroll is over 100");
  //       //   setBgColor("#1e212830");
  //     }
  //     if (document.documentElement.scrollTop > window.innerHeight) {
  //       console.log("Window scroll is over window.innerHeight");
  //       //   setBgColor("#1e212830");
  //     }

  //     // } else {
  //     //   console.log("Window scroll is below");
  //     //   setBgColor("#1e212830");
  //     // }
  //   });

  //   console.log("innerheight", window.innerHeight);
  window.onload = function () {
    if (
      "IntersectionObserver" in window &&
      "IntersectionObserverEntry" in window &&
      "intersectionRatio" in window.IntersectionObserverEntry.prototype
    ) {
      let observerOne = new IntersectionObserver((entries) => {
        if (entries[0].boundingClientRect.y < 0) {
          console.log("it is over");
          setBgColor("#1e212830");
        } else {
          console.log("it is under");
          setBgColor("#1e212890");
        }
      });
      let observerTwo = new IntersectionObserver((entries) => {
        if (entries[0].boundingClientRect.y < 0) {
          console.log("change image");
          imageChanger();
        }
      });
      observerOne.observe(document.querySelector("#anchorOne"));
      observerTwo.observe(document.querySelector("#anchorTwo"));
    }
  };

  return (
    <>
      <Header bgColor={bgColor} />
      <SectionOne bgImage={bgImage} />
      <div id="testtwo" className="testdiv two">
        This is test two
      </div>
      <div id="testthree" className="testdiv three">
        This is test three
      </div>
      <div id="testfour" className="testdiv four">
        This is test four
      </div>
    </>
  );
}

export default Pages;
