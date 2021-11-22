import React, { Component } from 'react'

export default class LongText extends Component {
constructor(props){
    super(props)
    this.state ={color:"blue"}
}

// changeColor=()=>{}


    render() {
        this.state.color = this.props.string.length > 5 ? "red" : "green" 
        return (
            <div>
            <h2 style={{color :this.state.color}} >{this.props.string} </h2>    
            </div>
        )
    }
}
