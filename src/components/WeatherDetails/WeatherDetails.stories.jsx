import React from 'react'
import WeatherDetails from "./WeatherDetails";
import 'typeface-roboto';



export default {
    title: "Weather Details",
    component: WeatherDetails
}

export const WeatherDetailsExample = () => (<WeatherDetails humididty={20} wind={67}/>)
