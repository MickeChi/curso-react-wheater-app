import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import CityInfo from "../CityInfo/CityInfo";
import Weather from "../Weather/Weather";
import Grid from "@material-ui/core/Grid";
import { List, ListItem } from "@material-ui/core";
import axios from "axios";
import convert from "convert-units";
import Alert from "@material-ui/lab/Alert";

//Funcion que retorna el city code
const getCityCode = (city, countryCode) => `${city}-${countryCode}`;

//Función que retorna otra función
const renderCityAndCountry = (onClickCity) => (cityAndCountry, weather) => {
  const { city, country, countryCode } = cityAndCountry;
  //const { temperature, state } = weather;
  return (
    <ListItem key={city} onClick={()=> onClickCity(city, countryCode)} button>
      <Grid container justify="center" alignItems="center">
        <Grid item md={9} xs={12}>
          <CityInfo city={city} country={country} />
        </Grid>
        <Grid item md={3} xs={12}>
          <Weather
            temperature={weather && weather.temperature}
            state={weather && weather.state}
          />
        </Grid>
      </Grid>
    </ListItem>
  );
};

const CityList = ({ cities, onClickCity }) => {
  const [allWeather, setAllWeather] = useState({})
  const [error, setError] = useState();

  useEffect(() => {
    const getWeather = async (city, countryCode) => {
      const apiKey = "0fe26f212c681d69fdcf9d64717c8469";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}`;
      
      try {
        const response = await axios.get(url);
        const { data } = response;
        const temperature = Number(convert(data.main.temp).from("K").to("C").toFixed(0));
        const state = data.weather[0].main.toLowerCase();
        const propName = getCityCode(city, countryCode);
        const propValue = { temperature, state };
        setAllWeather((allWeather) => ({...allWeather, [propName]: propValue}));
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
      getWeather(city, countryCode)
    });

  }, [cities]); //Dependencias que cambian

  return (
    <div>
      {error && (
        <Alert onClose={() => setError()} severity="error">
          {error}
        </Alert>
      )}
      <List>
        {
          //Función que retorna otra función
          cities.map((cityAndCountry) =>
            renderCityAndCountry(onClickCity)(
              cityAndCountry,
              allWeather[getCityCode(cityAndCountry.city, cityAndCountry.countryCode)]
            )
          )
        }
      </List>
    </div>
  );
};

CityList.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      countryCode: PropTypes.string.isRequired
    })
  ).isRequired,
  onClickCity: PropTypes.func.isRequired,
};

export default CityList;
