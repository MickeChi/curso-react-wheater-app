import React from "react";
import { useHistory } from "react-router-dom";
import CityList from "./../components/CityList/CityList";
import AppFrame from "./../components/AppFrame/AppFrame";
import { Paper } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { getCities } from "../services/citiesServices";

const MainPage = ({ actions, data }) => {
  const history = useHistory();
  const onClickHandler = (city, countryCode) => {
    //history.push permite cambiar la navegacion por programación
    console.log("city and countrycide", city, countryCode);
    history.push(`/city/${countryCode}/${city}`);
  };

  return (
    <AppFrame>
      <Grid container justify="space-around" direction="column" spacing={2}>
        <Paper elevation={3}>
          <CityList
            cities={getCities()}
            onClickCity={onClickHandler}
            data={data}
            actions={actions}
          ></CityList>
        </Paper>
      </Grid>
    </AppFrame>
  );
};

export default MainPage;
