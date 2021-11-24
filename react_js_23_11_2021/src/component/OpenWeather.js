import React, { Component } from 'react'
import "./OpenWeather.css"
import axios from "axios"

export default class OpenWeather extends Component {
    state = {city :"" , item:"" , error:""}


    getInputValue = (e)=>{
        this.setState({city : e.target.value})
        console.log(this.state.city);
    }


    click = (e)=>{
        
        e.preventDefault()
        const cityName = this.state.city
        const APIkey = "13d0f03177f2b846259640f39283e7d8"
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}`
        axios
        .get(url)
        .then(res=> this.setState({ item:` this temp_min is ${res.data.main.temp_min} this temp_max is ${res.data.main.temp_max} `}))
        .catch(err=>this.setState({error: "this city could not be found" }))
        
    }

    
    render() {

        return (
            <div  className="divBackground" >
                <form onSubmit={this.click} className="whetherFrom">
                <h1 className = "title">whet's the whether?</h1>
                <p>Enter the  name of a city</p>
                <input onChange={this.getInputValue} className="inputCity" type="text" /><br/>
                <input className="submit" type="submit" value="submit" />
                <p className="showTemp">{this.state.item}</p>
                <p className="showErr">{this.state.error}</p>
                </form>
               
            </div>
        )
    }
}
