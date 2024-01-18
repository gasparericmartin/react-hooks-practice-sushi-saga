import React, {useState} from 'react'

function WalletForm({money, setMoney, form, setForm, handleSwitch}) {
    const [addMoney, setAddMoney] = useState(0)
    
    function handleChange(e) {
        console.log(e.target.value)
        setAddMoney(parseInt(e.target.value))
    }
    
    function handleSubmit(e) {
        e.preventDefault()
        setMoney((money) => money += addMoney)
    }

    
    return (
        <div>
            <div>
                <button onClick={handleSwitch}>Switch</button>
            </div>
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type='text' placeholder='number here'></input>
            <button type='submit'>Submit</button>
        </form>
        </div>
    )
}

export default WalletForm