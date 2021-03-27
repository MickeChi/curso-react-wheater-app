import React from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom'
import CityList from './../components/CityList/CityList';

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
        <div>
            <h2>Lista de ciudades</h2>
            <CityList cities={cities} onClickCity={onClickHandler}></CityList>
        </div>
    );
};


export default MainPage;