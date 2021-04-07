import { useState, useEffect } from "react";
import axios from "axios";
import { getUrlWeather } from './../utils/urls';
import getAllWeathers from './../mappers/getAllWeathers';

const useCityList = (cities) => {
  const [allWeather, setAllWeather] = useState({});
  const [error, setError] = useState();
  useEffect(() => {
    const getWeather = async (city, countryCode) => {
      const url = getUrlWeather(city, countryCode )

      try {
        const response = await axios.get(url);
        const getAllWeathersAux = getAllWeathers(response, city, countryCode);
        setAllWeather((allWeather) => ({
          ...allWeather,
          ...getAllWeathersAux,
        }));
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
      getWeather(city, countryCode);
    });
  }, [cities]); //Dependencias que cambian

  return {allWeather, error, setError};
};

export default useCityList;
