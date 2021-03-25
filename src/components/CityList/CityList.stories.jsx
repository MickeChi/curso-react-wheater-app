import React from "react";
import CityList from "./CityList";
import { action } from "@storybook/addon-actions";

export default {
    title: "City List",
    component: CityList
}

const cities = [
    {city: "Mérida", country: "Méxic"},
    {city: "Monterrey", country: "México"},
    {city: "Guadalajara", country: "México"}
]

export const CityListExample = () => <CityList cities={cities} onClickCity={action("Click en city")}/>
