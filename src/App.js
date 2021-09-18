/* eslint-disable react/jsx-no-undef */
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";
import Trending from "./Pages/Trending/Trending";
import Films from "./Pages/Films/Films";
import Series from "./Pages/Series/Series";
import Search from "./Pages/Search/Search";

function App() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Header />
            <div className="App">
                <Container>
                    <Switch>
                        <Route path="/" component={Trending} exact />
                        <Route path="/films" component={Films} />
                        <Route path="/series" component={Series} />
                        <Route path="/search" component={Search} />
                    </Switch>
                </Container>
            </div>
            <SimpleBottomNavigation />
        </BrowserRouter>
    );
}

export default App;
