const express = require("express");
const axios = require("axios");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/dolar", async function (req, res) {
  const coinResponse = await axios.get("https://api.hgbrasil.com/finance");

  //Dolar
  const dolar = coinResponse.data.results.currencies.USD.buy;
  const dolarVariation = coinResponse.data.results.currencies.USD.variation;

  //Euro
  const euro = coinResponse.data.results.currencies.EUR.buy;
  const euroVariation = coinResponse.data.results.currencies.EUR.variation;

  //API blocked, the values below are provisory
  //const dolar = 5.08
  //const variation = 0.34
  res.send({ success: true, dolar, euro, dolarVariation, euroVariation });
});

app.listen(4000);
