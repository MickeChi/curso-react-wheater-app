import React, { useCallback, useMemo, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import MainPage from "./pages/MainPage";
import CityPage from "./pages/CityPage";
import NotFoundPage from './pages/NotFoundPage';
import Grid from '@material-ui/core/Grid';

const App = () => {

const [allWeather, setAllWeather] = useState({})

const onSetAllWeather = useCallback(
  weatherCity=> {
    setAllWeather((allWeather) => {
      return { ...allWeather, ...weatherCity };
    });
  },
  [setAllWeather]
);


  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <WelcomePage />
        </Route>
        <Route path="/main">
          <MainPage
            onSetAllWeather={onSetAllWeather}
            allWeather={allWeather}
          ></MainPage>
        </Route>
        <Route path="/city/:countryCode/:city">
          <CityPage
            allWeather={allWeather}
            onSetAllWeather={onSetAllWeather}
          ></CityPage>
        </Route>
        <Route>
          <NotFoundPage></NotFoundPage>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
