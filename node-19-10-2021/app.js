const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const axios = require("axios");
const port = 3000;

app.set("view engine", "hbs");

app.engine(
  "hbs",
  handlebars({
    layoutsDir: __dirname + "/views/layouts",
    extname: "hbs",
    defaultLayout: "index",
    partialsDir: __dirname + "/views/partials",
  })
);

app.use(express.static("public"));

app.get("/", (req, res) => {
    const APiKEY = "13d0f03177f2b846259640f39283e7d8";
    if(req.query.city){
         axios
    .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${req.query.city}&appid=${APiKEY}`
        )
        .then(function (response) {
            console.log(response);
            const lat = response.data.coord.lat
            const lon = response.data.coord.lon
            const city =  req.query.city
            console.log(lon,lat);
            
            res.render("content", { text : "location" , title:"home", lat :lat , lon :lon , cityName :  city })
            
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    else{

        res.render("content", { text : "location" , title:"home" , lat :"lat" , lon :"lon" ,
        form:true
       });
    }
   
});

app.get("/about", (req, res) => {
    res.render("content", {text : "about me"  , title:"about", 
    src:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
});
});

app.get("/help", (req, res) => {
    res.render("content", {  text : "help" , title:"help",para:"Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum"});
});
app.listen(port, () => {

  console.log(`app listening ${port}`);
});
