import React, {useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
import WalletForm from './WalletForm'

const API = "http://localhost:3001/sushis";

function App() {
  const [sushiRender, setSushiRender] = useState([])
  const [empties, setEmpties] = useState([])
  const [money, setMoney] = useState(40)
  const [form, setForm] = useState(false)

  function handleSwitch() {
    setForm(!form)
}
  
  return (
    <div className="app">
      {form ? <WalletForm 
                money={money}
                setMoney={setMoney}
                form={form}
                setForm={setForm}
                handleSwitch={handleSwitch}/>: 
              <div>
                <div>
                <button onClick={handleSwitch}>Switch</button>
                </div>
              <div>
              <SushiContainer
                sushiRender={sushiRender}
                setSushiRender={setSushiRender} 
                empties={empties}
                setEmpties={setEmpties}
                money={money}
                setMoney={setMoney}/>
              </div>
              </div>}
      {form ? null :
                      <Table 
                        plates={empties}
                        money={money}/>}

    </div>
  );
}

export default App;
