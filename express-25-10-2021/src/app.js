const express = require("express");
const axios = require("axios");
const path = require("path");
const app = express();
const PORT = 8080;

const hbs = require("hbs");

const publicPath = path.join(__dirname, "..", "public");
const viewsPath = path.join(__dirname, "..", "templates", "views");
const partialsPath = path.join(__dirname, "..", "templates", "partials");

app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicPath));

app.get("/", (req, res) => {
  const API_KEY = process.env.OPEN_WEATHER_API_KEY;
  const city = req.query.city;
  if (req.query.city) {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    axios
      .get(url)
      .then(function (response) {
        const lat = response.data.coord.lat;
        const lon = response.data.coord.lon;
        const city = req.query.city;
        res.render("index", {
          text: "Location",
          title: "home",
          lat: lat,
          lon: lon,
          cityName: city,
          form: true,
        });
      })

      .catch(function (error) {
        console.log(error);
      });
  } else {
    res.render("index", {
      text: "Location",
      title: "home",
      form: true,
    });
  }
});

app.get("/about", (req, res) => {
  res.render("index", {
    text: "about",
    title: "about",
    src: "https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792__340.png",
    img: true,
  });
});
app.get("/help", (req, res) => {
  res.render("index", { text: "help", title: "help" });
});

app.listen(PORT, () => console.log(`app is listening ${PORT}`));
