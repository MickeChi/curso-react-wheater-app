import { useState, useEffect } from "react";
import axios from "axios";
import { getUrlForecast } from "../utils/urls";
import { useParams } from 'react-router-dom';
import getChartData from "./../mappers/getChartData";
import getForecastItemList from './../mappers/getForecastItemList';
import { getCityCode } from './../utils/utils';

const useCityPage = (
  allChartData,
  allForecastItemList,
  onSetChartData,
  onSetForecastItemList
) => {
  //const [dataForecastChart, setDataForecastChart] = useState(null);
  //const [forecastItemList, setForecastItemList] = useState(null);
  const { city, countryCode } = useParams();

  useEffect(() => {
    const getForecast = async () => {
      const url = getUrlForecast({ city, countryCode });
      const cityCode = getCityCode(city, countryCode);
      try {
        const { data } = await axios.get(url);

        const dataAux = getChartData(data);

        onSetChartData({ [cityCode]: dataAux });

        const forecastItemListAux = getForecastItemList(data);

        onSetForecastItemList({ [cityCode]: forecastItemListAux });
      } catch (error) {
        console.log(error);
      }
    };
    const cityCode = getCityCode(city, countryCode);

    if (
      allChartData &&
      allForecastItemList &&
      !allChartData[cityCode] &&
      !allForecastItemList[cityCode]
    ) {
      getForecast();
    }
  }, [
    city,
    countryCode,
    onSetChartData,
    onSetForecastItemList,
    allChartData,
    allForecastItemList,
  ]);

  return { city, countryCode };
};

export default useCityPage;

