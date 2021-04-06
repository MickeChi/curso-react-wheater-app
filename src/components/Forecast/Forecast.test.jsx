import React from 'react';
import Forecast from './Forecast';
import { render } from '@testing-library/react';
import ForecastItem from './../ForecastItem/ForecastItem';

const forecastItemList = [
  { hour: 10, state: "clear", temperature: 34, weekDay: "Lunes" },
  { hour: 11, state: "clouds", temperature: 25, weekDay: "Martes" },
  { hour: 12, state: "drizzle", temperature: 15, weekDay: "Miercoles" },
  { hour: 5, state: "clear", temperature: 19, weekDay: "Jueves" },
  { hour: 1, state: "rain", temperature: 42, weekDay: "Viernes" },
  { hour: 3, state: "thunderstorm", temperature: 29, weekDay: "Sabado" },
  { hour: 4, state: "snow", temperature: 12, weekDay: "Domingo" },
];

test("Forecast render", async() => {
    //Vamos a hacer un test en el cual hacemos una marca en los componentes renderizados para obtenerlos despues en el test
    const {findAllByTestId} = render(<Forecast forecastItemList={forecastItemList}></Forecast>)
    const forecastItems = await findAllByTestId("forecast-item-container")
    expect(forecastItems).toHaveLength(7);

})