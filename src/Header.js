import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";

function Header({ bgColor }) {
  const useStyles = makeStyles(() => ({
    header: {
      backgroundColor: `${bgColor}`,
      transition: "all 0.5s",
    },
    menuButton: {
      // backgroundColor: "lightgray",
      fontWeight: 700,
      size: "18px",
      marginLeft: "38px",
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
    },
  }));

  const headersData = [
    {
      label: "Test One",
      href: "testone",
    },
    {
      label: "Test Two",
      href: "testtwo",
    },
    {
      label: "Test Three",
      href: "testthree",
    },
    {
      label: "Test Four",
      href: "testfour",
    },
  ];

  const [state, setState] = useState({
    mobileView: false,
  });
  const { mobileView } = state;
  const { header, menuButton, toolbar } = useStyles();

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {ownLogo}
        <div>{getMenuButtons()}</div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    return <div>Mobile display</div>;
  };

  const ownLogo = (
    <Typography variant="h6" component="h1">
      Attila nav
    </Typography>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            className: menuButton,
            onClick: () => {
              document
                .getElementById(href)
                .scrollIntoView({ behavior: "smooth" });
            },
          }}
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <header>
      <AppBar className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}

export default Header;
