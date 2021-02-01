import React from "react";
import { Container } from "@material-ui/core";
import bgImage3 from "./assets/img3.jpg";
function SectionThree() {
  const styles = {
    flipContainer: {
      color: "#FFFFFF",
      height: "100vh",
      padding: "0",
      paddingTop: "80px",
      backgroundColor: "darkgray",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  };

  const turnCard = () => {
    const card = document.getElementById("card");
    card.classList.toggle("card--flipped");
    console.log("Card clicked!");
  };

  return (
    <Container maxWidth="auto" id="testthree" style={styles.flipContainer}>
      {/* <div className="flipper">This is test three container with component</div> */}
      <div id="card" onClick={turnCard}>
        <div className="card__inner">
          <div className="card__front">
            <div>Front side</div>
            <div>Click to the back.</div>
            <img src={bgImage3} className="cardtestimage" alt="for test" />
          </div>

          <div className="card__back">
            <p>Back side</p>
            <p>Click to the front.</p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default SectionThree;
