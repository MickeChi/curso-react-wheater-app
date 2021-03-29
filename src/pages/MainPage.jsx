import React from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom'
import CityList from './../components/CityList/CityList';
import AppFrame from './../components/AppFrame/AppFrame';
import { Paper } from '@material-ui/core';

const cities = [
    {city: "Mérida", country: "Méxic"},
    {city: "Monterrey", country: "México"},
    {city: "Guadalajara", country: "México"}
]

const MainPage = props => {
    const history = useHistory()
    const onClickHandler =() => {
        //history.push permite cambiar la navegacion por programación
        history.push("/city");

    }

    return (
      <AppFrame>
        <Paper elevation={3}>
          <CityList cities={cities} onClickCity={onClickHandler}></CityList>
        </Paper>
      </AppFrame>
    );
};


export default MainPage;