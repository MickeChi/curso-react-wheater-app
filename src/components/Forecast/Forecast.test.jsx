import React from 'react';
import Forecast from './Forecast';
import { render } from '@testing-library/react';
import ForecastItem from './../ForecastItem/ForecastItem';

const forecastItemList = [
    { hour: 10, state: "sunny", temperature: 34, weekDay: "Lunes"},
    { hour: 10, state: "cloud", temperature: 25, weekDay: "Martes"},
    { hour: 10, state: "fog", temperature: 15, weekDay: "Miercoles"},
    { hour: 10, state: "cloudy", temperature: 19, weekDay: "Jueves"},
    { hour: 10, state: "rain", temperature: 42, weekDay: "Viernes"},
    { hour: 10, state: "sunny", temperature: 29, weekDay: "Sabado"},
    { hour: 10, state: "cloud", temperature: 12, weekDay: "Domingo"}
];

test("Forecast render", async() => {
    //Vamos a hacer un test en el cual hacemos una marca en los componentes renderizados para obtenerlos despues en el test
    const {findAllByTestId} = render(<Forecast forecastItemList={forecastItemList}></Forecast>)
    const forecastItems = await findAllByTestId("forecast-item-container")
    expect(forecastItems).toHaveLength(7);

})