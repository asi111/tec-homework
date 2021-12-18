import { useState } from "react";
import "./App.css";
import Reddit from "./components/Reddit";
import Unmount from "./components/Unmount";

function App() {
  // const [string, setString] = useState("");
  const [display, setDisplay] = useState(true);

   
  return (
    <div className="App">
      {/* <form>
        <input
          type="text"
          onChange={(e) => setString(String(e.target.value))}
        />
      </form>
      <Reddit string={string} /> */}
      {/* <Unmount  /> */}
      {display ? <Unmount /> : ""}
      <button onClick={() => setDisplay(display ? false : true)}>click</button>
    </div>
  );
}

export default App;
