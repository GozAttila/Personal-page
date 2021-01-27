import React from "react";
import { Container } from "@material-ui/core";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import bgImage1 from "./assets/img1.jpg";
import bgImage2 from "./assets/img2.jpg";
import bgImage3 from "./assets/img3.jpg";

const imageChanger = () => {
  const images = [bgImage1, bgImage2, bgImage3];
  return images[Math.floor(Math.random() * 3)];
};

function SectionOne({ bgImage }) {
  const styles = {
    bgContainer: {
      // backgroundImage: `url(${imageChanger()})`,
      backgroundImage: `url(${bgImage})`,
      color: "#FFFFFF",
      // objectFit: "cover",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      height: "100vh",
      paddingTop: "80px",
    },
  };

  return (
    <Container
      maxWidth="xl"
      id="testone"
      className="testdivcont one"
      style={styles.bgContainer}
    >
      This is test one container with component
    </Container>
  );
}

export default SectionOne;
