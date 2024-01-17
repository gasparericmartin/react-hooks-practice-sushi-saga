import React, {useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushiRender, setSushiRender] = useState([])
  const [empties, setEmpties] = useState([])
  
  return (
    <div className="app">
      <SushiContainer
        sushiRender={sushiRender}
        setSushiRender={setSushiRender} 
        empties={empties}
        setEmpties={setEmpties}/>
      <Table plates={empties}/>
    </div>
  );
}

export default App;
