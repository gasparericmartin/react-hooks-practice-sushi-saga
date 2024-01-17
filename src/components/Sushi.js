import React, {useState} from "react";

function Sushi({sushi, empties, setEmpties, money, setMoney}) {
  const [eaten, setEaten] = useState(false)
  function handleClick() {
    if(sushi.price <= money) {
      setEaten(!eaten)
      setEmpties([...empties, sushi])
      setMoney((money) => money -= sushi.price)
    }
    else {
      console.log("can't do that")
    }

    
  }
  
  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {eaten ? null : (
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
