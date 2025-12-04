import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import accordionData from './data'
function App() {
  const [isOpen, setIsOpen] = useState(null)

  const handleToggle = (id) => {
    setIsOpen(isOpen === id ? null: id)
  }

  return (
    <div>
      {accordionData.map((item) => {
        return <div>
          <button onClick={()=>handleToggle(item.id)}>{item.title}</button>
          {isOpen===item.id?<span>-</span>:<span>+</span>}
          {isOpen===item.id&& <div>{item.content}</div>}
        </div>

      })}
    </div>
  )
}

export default App
