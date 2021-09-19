import { Badge, createTheme } from "@material-ui/core";
import React from "react";
import { img_300, unavailable } from "../../config/config";
import ContentModal from "../ContentModal/ContentModal";
import "./SingleContent.css";
import { ThemeProvider } from "@material-ui/styles";
import { red } from "@material-ui/core/colors";

const determineColor = rating => {
    if (rating >= 7.5) {
        return "primary";
    }
};

const myTheme = createTheme({
    palette: {
        primary: {
            main: "#2e7d32",
            contrastText: "#fff",
        },
        secondary: {
            main: "#ef6c00",
            contrastText: "#fff",
        },
        tertiary: {
            main: "#d32f2f",
            contrastText: "#fff",
        },
    },
});

const SingleContent = ({ id, poster, title, date, media_type, vote_average }) => {
    return (
        <ContentModal media_type={media_type} id={id}>
            <ThemeProvider theme={myTheme}>
                <Badge badgeContent={vote_average} color={vote_average > 6 ? "primary" : "secondary"} />
            </ThemeProvider>
            <img className="poster" src={poster ? `${img_300}${poster}` : unavailable} alt={title} />
            <h3 className="title">{title}</h3>
            <span className="subTitle">
                {media_type === "movie" ? "Movie" : "TV Series"}
                <span>{date}</span>
            </span>
        </ContentModal>
    );
};

export default SingleContent;
