import React, { Component } from 'react'

export default class TowCounter extends Component {

    constructor(){
        super()
    }
 state ={countOne : 0 , countTow:0}

 increment = ()=>{
     this.setState({countOne : this.state.countOne +1})
 }
 incrementTwo = ()=>{
    this.setState({countTow : this.state.countTow +1})
}
    render() {
        return (
            <div>
        <button onClick={this.increment}>increment</button>
        <p>{this.state.countOne}</p>

        <button onClick={this.incrementTwo}>incrementTow</button>
        <p>{this.state.countTow}</p>
            </div>
        )
    }
}
