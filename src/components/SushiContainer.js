import React, {useEffect, useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from './Sushi'

function SushiContainer({
          sushiRender, 
          setSushiRender, 
          empties, 
          setEmpties, 
          money,
          setMoney}) {
  const listLength = 4
  const [sushiList, setSushiList] = useState([])
  const [currentSushi, setCurrentSushi] = useState(listLength)


  useEffect(() => {
    fetch('http://localhost:3001/sushis')
    .then((response) => response.json())
    .then((data) => {
      setSushiList(data)
      setSushiRender(data.slice(0, listLength))
    })
  }, [])

  function handleMore() {
    console.log(sushiRender.length)
    if(sushiList[sushiList.length - 1] === sushiRender[sushiRender.length - 1]) {
      console.log('you have reached the end')
      setSushiRender(sushiList.slice(0, listLength))
      setCurrentSushi(listLength)
    }
    else {
      setSushiRender(sushiList.slice(currentSushi, currentSushi + 4))
      setCurrentSushi((currentSushi) => currentSushi += 4)
    }
  }
  
  return (
    <div className="belt">
      {sushiRender.map((sushi) => {
        return <Sushi 
                key={sushi.id} 
                sushi={sushi}
                empties={empties}
                setEmpties={setEmpties}
                money={money}
                setMoney={setMoney}
                sushiRender={sushiRender}
                setSushiRender={setSushiRender}/>
      })}
      <MoreButton handleMore={handleMore}/>
    </div>
  );
}

export default SushiContainer;
