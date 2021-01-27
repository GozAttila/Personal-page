import React from "react";
import { Container } from "@material-ui/core";

function SectionThree() {
  const styles = {
    bgContainer: {
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
  // window.onload = function () {
  //   let card = document.getElementById("card");
  //   card.addEventListener("click", () => {
  //     card.classList.toggle("card--flipped");
  //     console.log("Card clicked!");
  //   });
  // };
  // Array.from(cards).forEach((card) => {
  //   card.addEventListener("click", () => {
  //     card.classList.toggle("card--flipped");
  //     console.log("Card clicked!");
  //   });
  // });

  const turnCard = () => {
    const card = document.getElementById("card");
    card.classList.toggle("card--flipped");
    console.log("Card clicked!");
  };

  return (
    <Container maxWidth="xl" id="testthree" style={styles.bgContainer}>
      {/* <div className="flipper">This is test three container with component</div> */}
      <div id="card" onClick={turnCard}>
        <div className="card__inner">
          <div className="card__front">
            <div>Front side</div>
            <div>Click to the back.</div>
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
