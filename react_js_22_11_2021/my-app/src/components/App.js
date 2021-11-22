import React from "react";
// import Counter from "./counter";
// import TowCounter from "./towCounter";
import LongText from "./LongText";
import ShowHide from "./ShowHide";


export default class App extends React.Component {
        constructor(props){
          super(props)
        }

  render() {
    return <div>

    {/* <Counter num={5}/> */}
    {/* <TowCounter/> */}
    {/* <LongText string = "hello"/> */}
    <ShowHide string ="hello"/>


    </div>;
  }
}
