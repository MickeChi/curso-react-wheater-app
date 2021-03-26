import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography'
import { WiCloud, WiDayCloudy, WiDayFog, WiDaySunny, WiDayRain} from 'react-icons/wi'

const stateByName = {
    cloud: WiCloud,
    cloudy: WiDayCloudy,
    fog: WiDayFog,
    sunny: WiDaySunny,
    rain: WiDayRain
};

export const validValues = [
    "cloud",
    "cloudy",
    "fog",
    "sunny",
    "rain"
];

const IconState = ({state}) => {
    const StateIconName = stateByName[state];
    return (
       <StateIconName/>
    );
}

IconState.propTypes = {
    state: PropTypes.oneOf(validValues).isRequired
};

export default IconState;
