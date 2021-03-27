import React from 'react'
import PropTypes from 'prop-types'
import Grid  from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import { IconContext } from 'react-icons';
import { IconContext } from 'react-icons';

const AppFrame = () => {
  return (
    <Grid container justify="center">
      <AppBar position="static">
        <Toolbar variant="dense" >
          <IconButton color="inherit" aria-label="menu">
            <Link to="/main" color="inherit" aria-label="menu">
              <IconContext.Provider></IconContext>
            </Link>

          </IconButton>

        </Toolbar>

      </AppBar>

    </Grid>
  )
}

AppFrame.propTypes = {

}

export default AppFrame
