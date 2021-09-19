import { Button, createTheme, Tab, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "@material-ui/styles";
import SearchIcon from "@material-ui/icons/Search";
import Tabs from "@material-ui/core/Tabs";
import axios from "axios";
import SingleContent from "../../components/SingleContent/SingleContent";
import CustomPagination from "../../components/Pagination/CustomPagination";

const Search = () => {
    const [type, setType] = useState(0);
    const [page, setPage] = useState(1);
    const [searchText, setSearchText] = useState("");
    const [content, setContent] = useState([]);
    const [numOfPages, setNumOfPages] = useState();
    const [noSearchResults, setNoSearchResults] = useState(false);

    const myTheme = createTheme({
        palette: {
            type: "dark",
            primary: {
                main: "#fff",
            },
            secondary: {
                main: "#0435c8",
            },
        },
        overrides: {
            MuiTextField: {
                root: {
                    label: {
                        color: "#cdd9fe",
                    },
                    "& .MuiFormLabel-root.Mui-focused": {
                        color: "#fff",
                    },
                },
            },
        },
    });

    const fetchSearch = async () => {
        try {
            const { data } = await axios.get(`https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchText}&page=${page}&include_adult=false`);
            setContent(data.results);
            setNumOfPages(data.total_pages);
            setNoSearchResults(data.results.length < 1);
        } catch (error) {
            console.error(error);
            console.log("Enter a search text!");
        }
    };

    useEffect(() => {
        window.scroll(0, 0);
        fetchSearch();
        // eslint-disable-next-line
    }, [page, type]);

    return (
        <div>
            <ThemeProvider theme={myTheme}>
                <div style={{ display: "flex", margin: "25px 0" }}>
                    <TextField className="textBox" label="Search" variant="outlined" style={{ flex: 1 }} color="secondary" onChange={e => setSearchText(e.target.value)} />
                    <Button variant="contained" style={{ marginLeft: "10px" }} size="large" onClick={fetchSearch}>
                        <SearchIcon color="secondary" fontSize="large" />
                    </Button>
                </div>
                <Tabs
                    value={type}
                    indicatorColor="secondary"
                    onChange={(event, newValue) => {
                        setPage(1);
                        setType(newValue);
                    }}
                    style={{
                        marginBottom: "20px",
                    }}
                >
                    <Tab style={{ width: "50%" }} label="Search Movies" />
                    <Tab style={{ width: "50%" }} label="Search TV Shows" />
                </Tabs>
            </ThemeProvider>
            <div className="trending">
                {content && content.map(c => <SingleContent key={c.id} id={c.id} poster={c.poster_path} title={c.title || c.name} date={c.first_air_date || c.release_date} media_type={type ? "tv" : "movie"} vote_average={c.vote_average} />)}
                {noSearchResults && (type ? <h2>Tv Shows not found</h2> : <h2>Movies not found</h2>)}
            </div>
            {numOfPages > 1 && <CustomPagination setpage={setPage} numOfPages={numOfPages} />}
        </div>
    );
};

export default Search;
