import React from 'react';
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";

const WeatherDetails = ({humididty, wind}) => {
    return (
        <>
            <Typography>Humedad: {humididty}%</Typography>
            <Typography>viento: {wind}km/h</Typography>
        </>
    );
};

WeatherDetails.propTypes = {
    humididty: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired
};

export default WeatherDetails;
