import React from "react";
import Grid from "@material-ui/core/Grid";
import CityInfo from "./../components/CityInfo/CityInfo";
import Weather from "./../components/Weather/Weather";
import WeatherDetails from "./../components/WeatherDetails/WeatherDetails";
import Forecast from "./../components/Forecast/Forecast";
import ForecastChart from "./../components/ForecastChart/ForecastChart";
import ForecastItem from "../components/ForecastItem/ForecastItem";
import AppFrame from "../components/AppFrame/AppFrame";

const forecastItemListExample = [
  { hour: 10, state: "sunny", temperature: 34, weekDay: "Lunes" },
  { hour: 10, state: "cloud", temperature: 25, weekDay: "Martes" },
  { hour: 10, state: "fog", temperature: 15, weekDay: "Miercoles" },
  { hour: 10, state: "cloudy", temperature: 19, weekDay: "Jueves" },
  { hour: 10, state: "rain", temperature: 42, weekDay: "Viernes" },
  { hour: 10, state: "sunny", temperature: 29, weekDay: "Sabado" },
  { hour: 10, state: "cloud", temperature: 12, weekDay: "Domingo" },
];

const dataExample = [
  { dayHour: "Jue 18", min: 14, max: 22 },
  { dayHour: "Vie 06", min: 18, max: 27 },
  { dayHour: "Vie 12", min: 18, max: 28 },
  { dayHour: "Vie 18", min: 18, max: 25 },
  { dayHour: "Sab 06", min: 15, max: 22 },
  { dayHour: "Sab 12", min: 12, max: 19 },
];

const CityPage = (props) => {
  const city = "Mérida";
  const country = "México";
  const state = "cloudy";
  const temperature = 20;
  const humididty = 80;
  const wind = 5;
  const data = dataExample;
  const forecastItemList = forecastItemListExample;

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
          <ForecastChart data={data} />
        </Grid>
        <Grid item>
          <Forecast forecastItemList={forecastItemList} />
        </Grid>
      </Grid>
    </AppFrame>
  );
};

export default CityPage;
