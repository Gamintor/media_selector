import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import MovieIcon from "@material-ui/icons/Movie";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import TvIcon from "@material-ui/icons/Tv";
import SearchIcon from "@material-ui/icons/Search";
import { useEffect } from "react";
import { useHistory } from "react-router";

const useStyles = makeStyles({
    root: {
        width: "100%",
        position: "fixed",
        bottom: 0,
        backgroundColor: "#cdd9fe",
        zIndex: 100,
        boxShadow: "0 -1px 5px #032896",
    },
});

export default function SimpleBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const history = useHistory();

    useEffect(() => {
        if (value === 0) history.push("/");
        else if (value === 1) history.push("/films");
        else if (value === 2) history.push("/series");
        else if (value === 3) history.push("/search");
    }, [value, history]);

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction style={{ color: "#0435c8" }} label="Trending" icon={<WhatshotIcon />} />
            <BottomNavigationAction style={{ color: "#0435c8" }} label="Movies" icon={<MovieIcon />} />
            <BottomNavigationAction style={{ color: "#0435c8" }} label="TV Shows" icon={<TvIcon />} />
            <BottomNavigationAction style={{ color: "#0435c8" }} label="Search" icon={<SearchIcon />} />
        </BottomNavigation>
    );
}
