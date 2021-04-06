import React from 'react';
import Forecast from './Forecast';

export default {
    title: "Forecast",
    component: Forecast
}

const forecastItemList = [
  { hour: 10, state: "clear", temperature: 34, weekDay: "Lunes" },
  { hour: 10, state: "clouds", temperature: 25, weekDay: "Martes" },
  { hour: 10, state: "drizzle", temperature: 15, weekDay: "Miercoles" },
  { hour: 10, state: "clear", temperature: 19, weekDay: "Jueves" },
  { hour: 10, state: "rain", temperature: 42, weekDay: "Viernes" },
  { hour: 10, state: "thunderstorm", temperature: 29, weekDay: "Sabado" },
  { hour: 10, state: "snow", temperature: 12, weekDay: "Domingo" },
];

export const ForecastExample = () => (<Forecast forecastItemList={forecastItemList}></Forecast>)