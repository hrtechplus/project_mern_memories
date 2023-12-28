import React from "react";

export default function Navbar() {
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Typography className={classes.heading} variant="h2" align="center">
        Memories
      </Typography>
      <img className={classes.image} src={memories} alt="icon" height="60" />
    </AppBar>
  );
}
