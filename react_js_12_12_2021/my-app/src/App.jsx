import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Footer from "./Pages/Footer";
import PageNotFound from "./Pages/PageNotFound";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="nav-bar" >
          <p className="title">asras farada</p>
          <ul className="nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
          </ul>
        </div>

        {/* <Link to="/Footer">Footer</Link> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/About" component={About} />
          <Route component={PageNotFound} />
          {/* <Route exact path="/Footer" component={Footer} /> */}
        </Switch>
      </BrowserRouter>
      <div className="main">main</div>
      <div>
        <img style={{width:50 ,hiegth:50}} src="https://img.icons8.com/material-outlined/344/github.png"  />
        <img style={{width:50 ,hiegth:50}} src="https://img.icons8.com/fluency/2x/youtube-play.png"  />
        <img style={{width:50 ,hiegth:50}} src="https://img.icons8.com/fluency/2x/linkedin.png"  />
        <img style={{width:50 ,hiegth:50}} src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/2x/external-udemycom-is-an-online-learning-and-teaching-platform-logo-color-tal-revivo.png"  />
        <Footer />
      </div>
    </div>
  );
}
export default App;
