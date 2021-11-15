const express = require("express");
const app = express();
const axios = require("axios");
const path = require("path");

const PORT = 8080;
const publicPath = path.join(__dirname,"..","public");
console.log( publicPath);

app.use(express.json());

app.use(express.static(publicPath));
app.post("/city", (req, res) => {
  const API_KEY = process.env.OPEN_WEATHER_API_KEY;
  const cityName = req.body.city;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;
  axios
    .get(url)
    .then(function (response) {
      // handle success
    res.send(response.data)
    // console.log(response);

    })
    .catch(function (error) {
      // handle error
    //   console.log(error);
    });
});

app.listen(PORT, () => {
  console.log(`app listening to ${PORT}`);
});
