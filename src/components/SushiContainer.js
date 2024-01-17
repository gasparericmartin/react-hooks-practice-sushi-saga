import React, {useEffect, useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from './Sushi'

function SushiContainer({sushiRender, setSushiRender, empties, setEmpties}) {
  const [sushiList, setSushiList] = useState([])
  const [currentSushi, setCurrentSushi] = useState(4)


  useEffect(() => {
    fetch('http://localhost:3001/sushis')
    .then((response) => response.json())
    .then((data) => {
      setSushiList(data)
      setSushiRender(data.slice(0, 4))
    })
  }, [])

  function handleMore() {
    console.log('clicked!')
    setSushiRender(sushiList.slice(currentSushi, currentSushi + 4))
    setCurrentSushi((currentSushi) => currentSushi += 4)
  }

  function getSushi() {

  }


  
  return (
    <div className="belt">
      {sushiRender.map((sushi) => {
        return <Sushi 
                key={sushi.id} 
                sushi={sushi}
                empties={empties}
                setEmpties={setEmpties}/>
      })}
      <MoreButton handleMore={handleMore}/>
    </div>
  );
}

export default SushiContainer;
