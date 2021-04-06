import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import MainPage from "./pages/MainPage";
import CityPage from "./pages/CityPage";
import NotFoundPage from './pages/NotFoundPage';
import Grid from '@material-ui/core/Grid';

const App = () => {
  return (
   
        <Router>
            <Switch>
            <Route exact path="/">
                <WelcomePage />
            </Route>
            <Route path="/main">
                <MainPage></MainPage>
            </Route>
            <Route path="/city/:countryCode/:city">
                <CityPage></CityPage>
            </Route>
            <Route>
                <NotFoundPage></NotFoundPage>
            </Route>
            </Switch>
        </Router>
  );
};

export default App;
