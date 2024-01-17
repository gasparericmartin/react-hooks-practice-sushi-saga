import React, {useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushiRender, setSushiRender] = useState([])
  return (
    <div className="app">
      <SushiContainer
        sushiRender={sushiRender}
        setSushiRender={setSushiRender} />
      <Table />
    </div>
  );
}

export default App;
