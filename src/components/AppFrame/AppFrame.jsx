import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import { IconContext } from "react-icons";
import { WiDaySunny } from "react-icons/wi";
import { Link as LinkRouter } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

//Propiedad children es una palabra reservada que se usa para anidar componentes dentro de un componente
const AppFrame = ({ children }) => {
  return (
    <Grid container justify="center">
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton color="inherit" aria-label="menu">
            <Link
              to="/main"
              color="inherit"
              aria-label="menu"
              component={LinkRouter}
            >
              <IconContext.Provider value={{ size: "2em" }}>
                <WiDaySunny />
              </IconContext.Provider>
            </Link>
          </IconButton>
          <Typography color="inherit" variant="h6">
            Wather App
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid contianer item xs={12} sm={10} md={10} lg={8}>
        {children}
      </Grid>
    </Grid>
  );
};

AppFrame.propTypes = {
  children: PropTypes.node, //Para validar componentes
};

export default AppFrame;
