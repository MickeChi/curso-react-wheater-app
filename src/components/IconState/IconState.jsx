import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography'
import { WiDayCloudy, WiDaySunny, WiDayRain, WiSnow, WiRaindrop, WiThunderstorm} from 'react-icons/wi'

const stateByName = {
  clouds: WiDayCloudy,
  clear: WiDaySunny,
  rain: WiDayRain,
  snow: WiSnow,
  drizzle: WiRaindrop,
  thunderstorm: WiThunderstorm,
};

export const validValues = [
         "clouds",
         "clear",
         "rain",
         "snow",
         "drizzle",
         "thunderstorm",
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
