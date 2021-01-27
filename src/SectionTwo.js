import React from "react";
import { Container } from "@material-ui/core";

function SectionTwo() {
  const styles = {
    triContainer: {
      height: "100vh",
      paddingTop: "80px",
      paddingLeft: "0",
    },
  };
  return (
    <Container maxWidth="xl" id="testtwo" style={styles.triContainer}>
      <div className="secTwo_upper">This is test two container upper</div>
      <div className="secTwo_middle">This is test two container middle</div>
      <div className="secTwo_bottom">This is test two container bottom</div>
    </Container>
  );
}

export default SectionTwo;
