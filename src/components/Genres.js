import { Chip, createTheme } from "@material-ui/core";
import axios from "axios";
import React, { useEffect } from "react";
import { ThemeProvider } from "@material-ui/styles";

const myTheme = createTheme({
    palette: {
        type: "dark",
        primary: {
            main: "#3f51b5",
        },
    },
});

const Genres = ({ selectedGenres, setselectedGenres, genres, setGenres, type, setPage }) => {
    const addGenre = genre => {
        setselectedGenres([...selectedGenres, genre]);
        setGenres(genres.filter(g => g.id !== genre.id));
        setPage(1);
    };

    const removeGenre = genre => {
        setselectedGenres(selectedGenres.filter(g => g.id !== genre.id));
        setGenres([...genres, genre]);
        setPage(1);
    };

    const fetchGenres = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
        setGenres(data.genres);
    };

    useEffect(() => {
        fetchGenres();
        return () => {
            setGenres([]);
        };
        // eslint-disable-next-line
    }, []);

    return (
        <div
            style={{
                padding: "8px 0",
            }}
        >
            <ThemeProvider theme={myTheme}>
                {selectedGenres.map(genre => {
                    return <Chip label={genre.name} style={{ margin: "3px" }} key={genre.id} color="primary" onDelete={() => removeGenre(genre)} />;
                })}
                {genres.map(genre => {
                    return <Chip label={genre.name} style={{ margin: "3px" }} variant="outlined" clickable key={genre.id} onClick={() => addGenre(genre)} />;
                })}
            </ThemeProvider>
        </div>
    );
};

export default Genres;
