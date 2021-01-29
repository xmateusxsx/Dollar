import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Chart from './Chart';

import Money from '@material-ui/icons/MonetizationOn';
import InsertChart from '@material-ui/icons/InsertChart';
import SwapVert from '@material-ui/icons/SwapVert';

import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    boxShadow: '2px 4px 10px 15px rgba(0, 0, 0, 0.25)',
    borderRadius: '0px 5px 5px 0px',
    borderLeft: '7px solid #47d101'
  },
  avatar: {
    backgroundColor: '#47d101',
    fontSize: 15
  },
}));

export default function Cards() {
  //CARD
  const classes = useStyles();

  //API
  const [dolars, setDolars] = useState(null);
  const [euros, setEuros] = useState(null);
  const [dolarVariations, setDolarVariations] = useState(null);
  const [euroVariations, setEuroVariations] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:4000/dolar')
    .then(res => {
      setDolars(res.data.dolar)
      setEuros(res.data.euro)
      setDolarVariations(res.data.dolarVariation)
      setEuroVariations(res.data.euroVariation)
    })
  })

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item lg={6} md={6} sm={12} xs={12} 
        className="valor">
          <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  <Money />
                </Avatar>
              }
              title="Valor"
              subheader="Valores das moedas"
            />
            <hr></hr>
            <CardContent>
              <h2>1 Dólar = R${dolars}</h2>
              <h2>1 Euro = R${euros}</h2>
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12} 
        className="variacao">
          <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  <SwapVert />
                </Avatar>
              }
              title="Variação"
              subheader="Variação das moedas"
            />
            <hr></hr>
            <CardContent>
              <h2>Dólar: {dolarVariations}</h2>
              <h2>Euro: {euroVariations}</h2>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <div>
        <Grid item lg={12} md={12} sm={12} xs={12} style={{ marginBottom: '30px' }}>
          <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  <InsertChart />
                </Avatar>
              }
              title="Cotação média"
              subheader="Cotação média das moedas por mês"
            />
            <hr></hr>
            <CardContent>
              <Chart />
            </CardContent>
          </Card>
        </Grid>
      </div>
    </div>
  );
}