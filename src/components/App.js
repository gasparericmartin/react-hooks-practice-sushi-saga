import React, {useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushiRender, setSushiRender] = useState([])
  const [empties, setEmpties] = useState([])
  const [money, setMoney] = useState(40)
  
  return (
    <div className="app">
      <SushiContainer
        sushiRender={sushiRender}
        setSushiRender={setSushiRender} 
        empties={empties}
        setEmpties={setEmpties}
        money={money}
        setMoney={setMoney}/>
      <Table 
        plates={empties}
        money={money}/>
    </div>
  );
}

export default App;
