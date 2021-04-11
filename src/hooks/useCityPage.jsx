import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import "moment/locale/es";
import { getUrlForecast } from "../utils/urls";
import { useParams } from 'react-router-dom';
import getChartData from "./../mappers/getChartData";
import getForecastItemList from './../mappers/getForecastItemList';

const useCityPage = () => {
  const [dataForecastChart, setDataForecastChart] = useState(null);
  const [forecastItemList, setForecastItemList] = useState(null);
  const { city, countryCode } = useParams(); 


  useEffect(() => {
    const getForecast = async () => {
      try {
        
        const url = getUrlForecast(city, countryCode);

        const { data } = await axios.get(url);
        const dataAux = getChartData(data)
        const forecastItemListAux = getForecastItemList(data);
        
        setDataForecastChart(dataAux);        
        setForecastItemList(forecastItemListAux);

        //setData(dataExample);
        //setForecastItemList(forecastItemListExample);
      } catch (error) {
        console.log(error)
      }
    };

    getForecast();
  }, [city, countryCode]);

  return { city, dataForecastChart, forecastItemList, countryCode };
};

export default useCityPage;

