import React, {useEffect, useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from './Sushi'

function SushiContainer(props) {
  const [sushiList, setSushiList] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/sushis')
    .then((response) => response.json())
    .then((data) => setSushiList(data))
  }, [])

  
  return (
    <div className="belt">
      {/* Render Sushi components here! */}
      <MoreButton />
    </div>
  );
}

export default SushiContainer;
