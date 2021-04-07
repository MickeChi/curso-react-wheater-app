import React from "react";
import Grid from "@material-ui/core/Grid";
import CityInfo from "./../components/CityInfo/CityInfo";
import Weather from "./../components/Weather/Weather";
import WeatherDetails from "./../components/WeatherDetails/WeatherDetails";
import Forecast from "./../components/Forecast/Forecast";
import ForecastChart from "./../components/ForecastChart/ForecastChart";
import AppFrame from "../components/AppFrame/AppFrame";
import useCityPage from "../hooks/useCityPage";


const CityPage = () => {
  
  const { city, dataForecastChart, forecastItemList } = useCityPage();

  //const city = "Mérida";
  const country = "México";
  const state = "clear";
  const temperature = 20;
  const humididty = 80;
  const wind = 5;
  //const data = dataExample;
  //const forecastItemList = forecastItemListExample;
  console.log("datos hok", city, dataForecastChart, forecastItemList);

  return (
    <AppFrame>
      <Grid container justify="space-around" direction="column" spacing={2}>
        <Grid item container xs={12} justify="center" alignItems="flex-end">
          <CityInfo city={city} country={country} />
        </Grid>
        <Grid container item justify="center" xs={12}>
          <Weather state={state} temperature={temperature} />
          <WeatherDetails humididty={humididty} wind={wind} />
        </Grid>
        <Grid item>
          {dataForecastChart && <ForecastChart data={dataForecastChart} />}
        </Grid>
        <Grid item>
          {forecastItemList && <Forecast forecastItemList={forecastItemList} />}
        </Grid>
      </Grid>
    </AppFrame>
  );
};

export default CityPage;
