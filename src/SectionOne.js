import React from "react";
import { Container } from "@material-ui/core";

function SectionOne({ bgImage }) {
  const styles = {
    bgContainer: {
      backgroundImage: `url(${bgImage})`,
      color: "#FFFFFF",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      height: "100vh",
      paddingTop: "80px",
    },
  };

  return (
    <Container maxWidth="xl" id="testone" style={styles.bgContainer}>
      This is test one container with component
    </Container>
  );
}

export default SectionOne;
