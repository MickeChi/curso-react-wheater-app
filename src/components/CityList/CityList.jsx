import React from "react";
import PropTypes from "prop-types";
import CityInfo from "../CityInfo/CityInfo";
import Weather from "../Weather/Weather";
import Grid from "@material-ui/core/Grid";

//Función que retorna otra función
const renderCityAndCountry = (onClickCity) => (cityAndCountry) => {
  const { city, country } = cityAndCountry;
  return (
    <li key={city} onClick={onClickCity}>
      <Grid container justify="center" alignItems="center">
        <Grid item md={8} xs={12}>
          <CityInfo city={city} country={country} />
        </Grid>
        <Grid item md={4} xs={12}>
          <Weather temperature={10} state="sunny" />
        </Grid>
      </Grid>
    </li>
  );
};

const CityList = ({ cities, onClickCity }) => {
  return (
    <ul>
      {
        //Función que retorna otra función
        cities.map((cityAndCountry) =>
          renderCityAndCountry(onClickCity)(cityAndCountry)
        )
      }
    </ul>
  );
};

CityList.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClickCity: PropTypes.func.isRequired,
};

export default CityList;
