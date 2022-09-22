import { useState } from 'react'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <div className="cuadritos">
        <div className='cuadro rojo'>Soy el cuadro rojo</div>
        <div className='cuadro azul'>Soy el cuadro azul</div>
        <div className='cuadro verde'>Soy el cuadro verde</div>
     </div>
    </div>
  )
}

export default App
