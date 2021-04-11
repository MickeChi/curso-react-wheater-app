import { useState, useEffect } from "react";
import axios from "axios";
import { getUrlWeather } from './../utils/urls';
import getAllWeathers from './../mappers/getAllWeathers';
import { getCityCode } from './../utils/utils';

const useCityList = (cities, allWeather, onSetAllWeather) => {
  //const [allWeather] = useState({});
  const [error, setError] = useState();
  
  useEffect(() => {
    const getWeather = async (city, countryCode) => {
      const url = getUrlWeather({city, countryCode});

      try {
        const propName = getCityCode(city, countryCode);

        onSetAllWeather({ [propName]: {} });

        const response = await axios.get(url);
        const allWeatherAux = getAllWeathers(response, city, countryCode);
        onSetAllWeather(allWeatherAux);
        //setAllWeather((allWeather) => ({  ...allWeather,  ...allWeatherAux }));
      } catch (error) {
        if (error.response) {
          //const { data, status } = error.response;
          setError("Ha ocurrido un error en el servidor del clima");
        } else if (error.request) {
          setError("Verifique si tiene acceso a internet");
        } else {
          setError("Error al cargar datos");
        }
      }
    };

    cities.forEach(({ city, countryCode }) => {
      if (!allWeather[getCityCode(city, countryCode)]) {
        getWeather(city, countryCode);
      }
    });
  }, [cities, onSetAllWeather, allWeather]); //Dependencias que cambian

  return { error, setError };
};

export default useCityList;
