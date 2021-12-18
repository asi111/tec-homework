import React, { useEffect, useState } from "react";
import "./Reddit.css"
export default function Reddit({string}) {
  const [reactJs, setReactJs] = useState([]);

 

  const getReactJs = () => {
    fetch(`https://www.reddit.com/r/${string}.json`)
      .then((res) => res.json())
      .then((data) => setReactJs(data.data.children))
      .catch((err) => console.log(err));
  };
 useEffect(getReactJs, [string]);


const newReactJsArr = reactJs.map((item, i) => {
       return <td key={i}>{item.data.title}</td>; 
      })


  return (
    <div>
      <table className="table">
        <tbody>
          <tr>
            <th>title</th>
            </tr>
         <tr>{newReactJsArr}</tr> 
        </tbody>

      </table>
    </div>
  );
}
