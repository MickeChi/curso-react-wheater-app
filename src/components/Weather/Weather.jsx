import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography'
import { WiCloud, WiDayCloudy, WiDayFog, WiDaySunny, WiDayRain} from 'react-icons/wi'
import { IconContext} from "react-icons";



const stateByName = {
    cloud: WiCloud,
    cloudy: WiDayCloudy,
    fog: WiDayFog,
    sunny: WiDaySunny,
    rain: WiDayRain
};

const renderState = state =>{
    let IconState = stateByName[state];
    return <IconState/>;
};

const Weather = ({temperature, state}) => {
    return (
        <div>
            <IconContext.Provider value={{size: "4em"}}>
                {renderState(state)}
            </IconContext.Provider>
            <Typography display="inline" variant="h2">{temperature}</Typography>
        </div>
    );
}

Weather.propTypes = {
    temperature: PropTypes.number.isRequired,
    state: PropTypes.string.isRequired
};

export default Weather;
