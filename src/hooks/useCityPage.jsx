import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import "moment/locale/es";
import { getUrlForecast } from "../utils/urls";
import { toCelcius } from "../utils/utils";
import { useParams } from 'react-router-dom';

const useCityPage = () => {
  const [dataForecastChart, setDataForecastChart] = useState(null);
  const [forecastItemList, setForecastItemList] = useState(null);
  const { city, countryCode } = useParams(); 


  useEffect(() => {
    const getForecast = async () => {
      try {
        
        const url = getUrlForecast(city, countryCode);

        const { data } = await axios.get(url);
        console.log("data forecast", data);

        const daysAhead = [0, 1, 2, 3, 4, 5];
        const days = daysAhead.map((d) => moment().add(d, "d"));
        const dataAux = days
          .map((day) => {
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
              hasTemps: temps.length > 0,
            };
          })
          .filter((item) => item.hasTemps);
        setDataForecastChart(dataAux);

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
        console.log("temps", forecastItemListAux);
        setForecastItemList(forecastItemListAux);

        //setData(dataExample);
        //setForecastItemList(forecastItemListExample);
      } catch (error) {
        console.log(error)
      }
    };

    getForecast();
  }, [city, countryCode]);

  return { city, dataForecastChart, forecastItemList };
};

export default useCityPage;

