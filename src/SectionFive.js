import React from "react";
import { Container } from "@material-ui/core";
import ContactForm from "./ContactForm";

function SectionFour() {
  const styles = {
    contactContainer: {
      color: "#FFFFFF",
      // height: "100vh",
      paddingTop: "80px",
      backgroundColor: "lightblue",
    },
  };
  return (
    // <Container maxWidth="xl" id="testfive" style={styles.contactContainer}>
    <Container maxWidth="auto" id="testfive" style={styles.contactContainer}>
      <ContactForm />
    </Container>
  );
}

export default SectionFour;
