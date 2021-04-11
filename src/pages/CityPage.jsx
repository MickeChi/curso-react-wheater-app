import React, {useMemo} from "react";
import Grid from "@material-ui/core/Grid";
import CityInfo from "./../components/CityInfo/CityInfo";
import Weather from "./../components/Weather/Weather";
import WeatherDetails from "./../components/WeatherDetails/WeatherDetails";
import Forecast from "./../components/Forecast/Forecast";
import ForecastChart from "./../components/ForecastChart/ForecastChart";
import AppFrame from "../components/AppFrame/AppFrame";
import useCityPage from "../hooks/useCityPage";
import useCityList from './../hooks/useCityList';
import { getCityCode } from './../utils/utils';
import { getCountryNameByCountryCode } from "../services/citiesServices";


const CityPage = ({ onSetAllWeather, allWeather }) => {
  const {
    city,
    countryCode,
    dataForecastChart,
    forecastItemList,
  } = useCityPage();
  const cities = useMemo(() => [{ city, countryCode }], [city, countryCode]); //Memorización, evita que se ciclen los hooks
  useCityList(cities, onSetAllWeather, allWeather);
  const weather = allWeather[getCityCode(city, countryCode)];
  const country = getCountryNameByCountryCode(countryCode);
  const state = weather && weather.state;
  const temperature = weather && weather.temperature;
  const humidity = weather && weather.humidity;
  const wind = weather && weather.wind;
  //const data = dataExample;
  //const forecastItemList = forecastItemListExample;
  console.log("datos weater", weather);

  return (
    <AppFrame>
      <Grid container justify="space-around" direction="column" spacing={2}>
        <Grid item container xs={12} justify="center" alignItems="flex-end">
          <CityInfo city={city} country={country} />
        </Grid>
        <Grid container item justify="center" xs={12}>
          <Weather state={state} temperature={temperature} />
          {humidity && wind && (
            <WeatherDetails humidity={humidity} wind={wind} />
          )}
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
