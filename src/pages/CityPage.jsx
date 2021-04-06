import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import CityInfo from "./../components/CityInfo/CityInfo";
import Weather from "./../components/Weather/Weather";
import WeatherDetails from "./../components/WeatherDetails/WeatherDetails";
import Forecast from "./../components/Forecast/Forecast";
import ForecastChart from "./../components/ForecastChart/ForecastChart";
import ForecastItem from "../components/ForecastItem/ForecastItem";
import AppFrame from "../components/AppFrame/AppFrame";
import { useParams } from "react-router-dom";
import axios from "axios";
import moment from 'moment'
import 'moment/locale/es'
import convert from "convert-units"; 

const forecastItemListExample = [
  { hour: 10, state: "clear", temperature: 34, weekDay: "Lunes" },
  { hour: 10, state: "clouds", temperature: 25, weekDay: "Martes" },
  { hour: 10, state: "drizzle", temperature: 15, weekDay: "Miercoles" },
  { hour: 10, state: "clear", temperature: 19, weekDay: "Jueves" },
  { hour: 10, state: "rain", temperature: 42, weekDay: "Viernes" },
  { hour: 10, state: "thunderstorm", temperature: 29, weekDay: "Sabado" },
  { hour: 10, state: "snow", temperature: 12, weekDay: "Domingo" },
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
  const [data, setData] = useState(null);
  const [forecastItemList, setForecastItemList] = useState(null);

  const { city, countryCode } = useParams();
  console.log("params", city, countryCode);

  useEffect(() => {
    

    const getForecast = async () => {
      try {
        const apiKey = "0fe26f212c681d69fdcf9d64717c8469";
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${apiKey}`;

        const { data } = await axios.get(url);
        console.log("data forecast", data);

        const toCelcius = (temp) =>Number(convert(temp).from("K").to("C").toFixed(0));


        const daysAhead = [0, 1, 2, 3, 4, 5];
        const days = daysAhead.map((d) => moment().add(d, "d"));
        const dataAux = days.map((day) => {
          //debugger;
          const tempObjArray = data.list.filter((item) => {
            const dayOfYear = moment.unix(item.dt).dayOfYear();
            return dayOfYear === day.dayOfYear();
          });
          console.log("day.dayOfYear()", day.dayOfYear());
          console.log("tempObjArray", tempObjArray);

          const temps = tempObjArray.map((item) => item.main.temp);
          // dayHour, min, max
          return {
            dayHour: day.format("ddd"),
            min: toCelcius(Math.min(...temps)),
            max: toCelcius(Math.max(...temps)),
          };
        });
        setData(dataAux);


        const interval = [4, 8, 12, 16, 20, 24];

        const forecastItemListAux = data.list
          .filter((item, index) => interval.includes(index))
          .map((item) => {
            console.log("hour", moment.unix(item.dt));
            return {
              hour: moment.unix(item.dt).hour(),
              state: item.weather[0].main.toLowerCase(),
              temperature: toCelcius(item.main.temp),
              weekDay: moment.unix(item.dt).format("ddd"),
            };
          });
        setForecastItemList(forecastItemListAux);  





        //setData(dataExample);
        //setForecastItemList(forecastItemListExample);
      } catch (error) {

      }
    };

    getForecast()
  }, [city, countryCode]);

  //const city = "Mérida";
  const country = "México";
  const state = "clear";
  const temperature = 20;
  const humididty = 80;
  const wind = 5;
  //const data = dataExample;
  //const forecastItemList = forecastItemListExample;

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
        <Grid item>{data && <ForecastChart data={data} />}</Grid>
        <Grid item>
          {forecastItemList && <Forecast forecastItemList={forecastItemList} />}
        </Grid>
      </Grid>
    </AppFrame>
  );
};

export default CityPage;
