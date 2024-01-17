import React, {useEffect, useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from './Sushi'

function SushiContainer(props) {
  const [sushiList, setSushiList] = useState([])
  const [sushiRender, setSushiRender] = useState([])
  const [currentSushi, setCurrentSushi] = useState(5)


  useEffect(() => {
    fetch('http://localhost:3001/sushis')
    .then((response) => response.json())
    .then((data) => {
      setSushiList(data)
      setSushiRender(data.slice(0, 5))
    })
  }, [])


  
  return (
    <div className="belt">
      {sushiRender.map((sushi) => {
        return <Sushi 
                key={sushi.id} 
                sushi={sushi}/>
      })}
      <MoreButton />
    </div>
  );
}

export default SushiContainer;
