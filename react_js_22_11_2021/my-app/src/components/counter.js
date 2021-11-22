import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props); }


        state = { count : this.props.num  }

        increment = ()=>{
            this.setState({count : this.state.count +1})
        }
   

    render() { 
        return ( 
            <div>
        <button onClick={this.increment}></button>
                <p>{this.state.count}</p>
        
            </div>
            );
    }
}
 
export default Counter;