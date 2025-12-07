import { useState } from 'react'
import carouselData from './data'
import './App.css'

function App() {


  const [currentImage, setCurrentImage] = useState(0)

  const handlePrev = () => {
    if (currentImage > 0) {
      setCurrentImage(currentImage - 1)
    }
  }
  const handleNext = () => {
    if (currentImage < carouselData.length - 1) {
      setCurrentImage(currentImage + 1)
    }
  }


  return (
    <div className='img-box'>
      <div className='alldata'>
        <img src={carouselData[currentImage].url} alt={carouselData[currentImage].title} className="img-view" />
        <div>
          <button disabled={currentImage===0} onClick={handlePrev}>prev</button>
          <button disabled={currentImage===carouselData.length-1} onClick={handleNext}>next</button>
        </div>
        <p>{currentImage + 1} / {carouselData.length}</p>
      </div>
    </div>
  )
}

export default App
