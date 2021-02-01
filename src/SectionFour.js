import React from "react";
import { Container } from "@material-ui/core";

import Grid from "@material-ui/core/Grid";
import ProjectCard from "./ProjectCard";

function SectionFour() {
  const styles = {
    albumContainer: {
      color: "#FFFFFF",
      // height: "100vh",
      paddingTop: "80px",
      backgroundColor: "darkgoldenrod",
    },
    cardGrid: {
      backgroundColor: "aquamarine",
      paddingTop: "5%",
      paddingBottom: "5%",
    },
  };
  return (
    <Container maxWidth="auto" id="testfour" style={styles.albumContainer}>
      <Container style={styles.cardGrid} maxWidth="xl">
        <Grid container spacing={4} justify="space-evenly">
          <ProjectCard />
        </Grid>
      </Container>
    </Container>
  );
}

export default SectionFour;
