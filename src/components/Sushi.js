import React, {useState} from "react";

function Sushi({
          sushi, 
          empties, 
          setEmpties, 
          money, 
          setMoney, 
          sushiRender, 
          setSushiRender}) {
  const [clicked, setClicked] = useState(false)

  function renderSushi(data) {
    return sushiRender.map((sushi) => {
      if(sushi.id !== data.id) {
        return sushi
      }
      else {
        return data
      }
    })
  }
  
  function handleClick() {
    if(sushi.price <= money) {
      setClicked(!clicked)
      setEmpties([...empties, sushi])
      setMoney((money) => money -= sushi.price)

      fetch(`http://localhost:3001/sushis/${sushi.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({...sushi, eaten: true})
      })
      .then((response) => response.json())
      .then((data) => setSushiRender(renderSushi(data)))
    }
    else {
      console.log("can't do that")
    }

    
  }
  
  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {sushi.eaten ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
