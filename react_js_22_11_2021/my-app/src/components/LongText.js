import React, { Component } from 'react'

export default class LongText extends Component {
constructor(props){
    super(props)
    this.xxx ={color:"blue"}
}

// changeColor=()=>{}


    render() {
        this.xxx.color = this.props.string.length > 5 ? "red" : "green" 
        return (
            <div>
            <h2 style={{color :this.xxx.color}} >{this.props.string} </h2>    
            </div>
        )
    }
}
