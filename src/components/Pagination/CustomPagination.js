import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import { createTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

const myTheme = createTheme({
    palette: {
        type: "dark",
        primary: {
            main: "#fff",
        },
    },
});

const CustomPagination = ({ setpage, numOfPages = 10 }) => {
    const changePage = page => {
        setpage(page);
        window.scroll(0, 0);
    };

    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
                marginBottom: "10px",
            }}
        >
            <ThemeProvider theme={myTheme}>
                <Pagination onChange={e => changePage(e.target.textContent)} count={numOfPages} variant="outlined" color="primary" />
            </ThemeProvider>
        </div>
    );
};

export default CustomPagination;
