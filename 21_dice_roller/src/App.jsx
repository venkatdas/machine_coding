import { useState } from 'react'
import './App.css'

function App() {
  const [dice, setDice] = useState("");
  const [roll, setRoll] = useState([]);

  const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

  const handleRoll = () => {
    const numDice = Number(dice);
    
    if (numDice <= 0 || !numDice) {
      alert("Please enter valid number")
      return
    }
    
    if (numDice > 99) {
      alert("Number should not be more than 99")
      return
    }
    
    const newRolls = [];
    for (let i = 0; i < numDice; i++) {
      const rollDiceval = Math.floor(Math.random() * 6) + 1;
      newRolls[i] = rollDiceval;
    }
    
    setRoll(newRolls);
  }

  return (
    <div className='container'>
      <h1>Dice Roller</h1>
      
      <div className='input-container'>
        <input 
          type='number' 
          value={dice} 
          onChange={(e) => setDice(e.target.value)} 
          placeholder='Number of dice'
          min="1"
          max="99"
        />
        <button onClick={handleRoll}>Roll</button>
      </div>
      
      <div className='roll-container'>
        {roll.map((val, index) => (
          <div key={index} className='roll'>
            {diceFaces[val - 1]}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App