import React from "react";
import PropTypes from "prop-types";
import CityInfo from "../CityInfo/CityInfo";
import Weather from "../Weather/Weather";
import Grid from "@material-ui/core/Grid";
import { List, ListItem } from "@material-ui/core";

//Función que retorna otra función
const renderCityAndCountry = (onClickCity) => (cityAndCountry) => {
  const { city, country } = cityAndCountry;
  return (
    <ListItem key={city} onClick={onClickCity} button>
      <Grid container justify="center" alignItems="center">
        <Grid item md={8} xs={12}>
          <CityInfo city={city} country={country} />
        </Grid>
        <Grid item md={4} xs={12}>
          <Weather temperature={10} state="sunny" />
        </Grid>
      </Grid>
    </ListItem>
  );
};

const CityList = ({ cities, onClickCity }) => {
  return (
    <List>
      {
        //Función que retorna otra función
        cities.map((cityAndCountry) =>
          renderCityAndCountry(onClickCity)(cityAndCountry)
        )
      }
    </List>
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
