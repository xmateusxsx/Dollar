import React from 'react';

import { AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import logo from '../../assets/logoWhite.png';

import Settings from '@material-ui/icons/Settings';

const useStyles = makeStyles((theme) => ({
  html: {
    margin: 0
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  color: {
    backgroundColor: "black",
  }
}));

export default function App() {
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <AppBar position="static" className={classes.color}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <img className="logo-app" src={logo} alt="" />
          </Typography>
          <Button color="inherit" style={{ float:'right !important' }}>
            <Settings style={{ marginRight: '5px' }}/>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}