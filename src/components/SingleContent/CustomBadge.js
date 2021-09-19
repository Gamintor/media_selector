import React from "react";
import { withStyles, createStyles } from "@material-ui/styles";
import classNames from "classnames";
import { Badge } from "@material-ui/core";

const styles = createStyles(theme => ({
    blue: {
        backgroundColor: theme.palette.blue.main,
    },
}));

const CustomBadge = ({ badgeContent, color }) => {
    return <Badge color={color} badgeContent={badgeContent} />;
};

export default CustomBadge;
