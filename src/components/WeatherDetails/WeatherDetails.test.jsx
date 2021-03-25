import React from 'react'
import { render } from '@testing-library/react'
/*
import Wheater  from './Weather' //SUT SUBJECT UNDER TESTING
*/
import '@testing-library/jest-dom/extend-expect'
import WeatherDetails from "./WeatherDetails";

test("Weather details render", async ()=>{
    const {findByText} = render(<WeatherDetails humididty={80} wind={10}/>);
    //Estamos usando un regex
    const wind = await findByText(/10/);
    const humidity = await findByText(/80/);


    expect(wind).toHaveTextContent("viento: 10km/h");
    expect(humidity).toHaveTextContent("Humedad: 80%");
});
