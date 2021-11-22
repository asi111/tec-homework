import React, { Component } from 'react'

export default class ShowHide extends Component {
    constructor(props){
        super(props) 
    }
  state = {hide : "block" }
    
ShowAndHide =()=>{
    this.setState({hide :this.state.hide === "block" ? "none" : "block" })
}
    render() {
        return (
            <div>
                <button onClick={this.ShowAndHide}>hide</button>
              <p style={{display : this.state.hide}}>{this.props.string}</p>  
            </div>
        )
    }
}
