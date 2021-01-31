import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { projects } from "./projects";

function ProjectCard() {
  const styles = {
    card: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      border: "1px solid lightgrey",
      position: "relative",
      width: "328px",
    },
    cardMedia: {
      //   paddingTop: "56.25%", // 16:9
      paddingTop: "50%",
      height: "0",
    },
    cardContent: {
      flexGrow: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    button: {
      width: "40%",
      textAlign: "center",
    },
    cardActions: {
      justifyContent: "space-evenly",
    },
  };

  return (
    <>
      {projects.map((project) => (
        <Grid item key={project.id} xs={"auto"}>
          <Card style={styles.card}>
            <div className="overlaytest">
              <div className="inside_overlay">
                <Typography align="center">{project.text}</Typography>
                <div className="tech_holder">
                  {project.tech.map((tool) => {
                    console.log("tool", tool.image);
                    return (
                      <img
                        key={`${project.id}-${tool.name}`}
                        className="techIcon"
                        src={tool.image}
                        alt={tool.name}
                      />
                    );
                  })}
                </div>
                <CardActions style={styles.cardActions}>
                  {project.appLink === "" ? null : (
                    <Button
                      size="small"
                      color="primary"
                      style={styles.button}
                      href={project.appLink}
                      target="_blank"
                    >
                      Link to project
                    </Button>
                  )}
                  {project.codeLink === "" ? null : (
                    <Button
                      size="small"
                      color="primary"
                      style={styles.button}
                      href={project.codeLink}
                      target="_blank"
                    >
                      Link to code (GitHub)
                    </Button>
                  )}
                </CardActions>
              </div>
            </div>
            <CardContent style={styles.cardContent}>
              <Typography variant="h5" component="h3">
                {project.heading}
              </Typography>
            </CardContent>
            <CardMedia
              style={styles.cardMedia}
              //   image={card.tech[0]}
              image={project.image}
              title="Image title"
            />
          </Card>
        </Grid>
      ))}
    </>
  );
}

export default ProjectCard;
