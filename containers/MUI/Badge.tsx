import React from "react";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import { makeStyles, withStyles } from "@material-ui/core";
import { useRouter } from "next/router";

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

interface IProps {
    length: number;
}

export default function BadgeCart({ length }: IProps) {
    const clasess = useStyles();
    const { replace } = useRouter();
    const handleClick = () => {
        if (length) {
            replace("/cart");
        }
    };
    return (
        <StyledBadge
            badgeContent={length}
            color="secondary"
            onClick={handleClick}
        >
            <ShoppingCartIcon className={clasess.root} />
        </StyledBadge>
    );
}
