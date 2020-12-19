import React from "react";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import { makeStyles, withStyles } from "@material-ui/core";

const StyledBadge = withStyles((theme) => ({
  badge: {
    cursor: "pointer",
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

const useStyles = makeStyles((theme) => ({
  root: {
    cursor: "pointer",
  },
}));

export default function BadgeCart() {
  const clasess = useStyles();
  return (
    <StyledBadge badgeContent={20} color="secondary">
      <ShoppingCartIcon className={clasess.root} />
    </StyledBadge>
  );
}
