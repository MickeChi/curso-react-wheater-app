import React from "react";
import PropTypes from "prop-types";
import CityInfo from "../CityInfo/CityInfo";
import Weather from "../Weather/Weather";
import Grid from "@material-ui/core/Grid";
import { List, ListItem } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { getCityCode} from './../../utils/utils'
import useCityList from './../../hooks/useCityList'

//Función que retorna otra función
const renderCityAndCountry = (onClickCity) => (cityAndCountry, weather) => {
  const { city, country, countryCode } = cityAndCountry;
  //const { temperature, state } = weather;
  return (
    <ListItem key={city} onClick={() => onClickCity(city, countryCode)} button>
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

  const {allWeather, error, setError} = useCityList(cities)
  
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
              allWeather[
                getCityCode(cityAndCountry.city, cityAndCountry.countryCode)
              ]
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
      countryCode: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClickCity: PropTypes.func.isRequired,
};

export default CityList;
