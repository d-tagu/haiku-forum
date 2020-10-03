import { makeStyles } from "@material-ui/styles";

import React from "react";

const BaseLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <div>
      <main className={classes.root}>{children}</main>
    </div>
  );
};

const useStyles = makeStyles(({ breakpoints, spacing }) => {
  return {
    root: {
      display: "grid",
      gridRowGap: spacing(2),
      margin: "auto",
      maxWidth: breakpoints.values.md,
      padding: spacing(2),
    },
  };
});

export default BaseLayout;
