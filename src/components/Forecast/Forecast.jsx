import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import ForecastItem from "./../ForecastItem/ForecastItem";
import { validValues } from "./../IconState/IconState";

const renderForecastItem = forecast => {
  const { hour, weekDay, state, temperature } = forecast;
  return (
    <Grid item key={`${weekDay}${hour}`} data-testid="forecast-item-container">
      <ForecastItem
        hour={hour}
        weekDay={weekDay}
        state={state}
        temperature={temperature}
      />
    </Grid>
  );
};

const Forecast = ({ forecastItemList }) => {
  return (
    <Grid container alignItems="center" justify="center">
      {forecastItemList.map((forecast) => renderForecastItem(forecast))}
    </Grid>
  );
};

Forecast.propTypes = {
  forecastItemList: PropTypes.arrayOf(
    PropTypes.shape({
      weekDay: PropTypes.string.isRequired,
      hour: PropTypes.number.isRequired,
      state: PropTypes.oneOf(validValues).isRequired,
      temperature: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Forecast;
