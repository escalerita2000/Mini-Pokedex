import { useState } from 'react'
import Pokedex from './Components/Pokedex.jsx'
import Buscador from './Components/Buscador.jsx'

const App = () => {
  const [nombreBuscado, setNombreBuscado] = useState('squirtle')  // ← esta línea faltaba

  const containerStyle = {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
  const contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '50px'
  }

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <Buscador onBuscar={setNombreBuscado} />
        <Pokedex nombre={nombreBuscado} />
      </div>
    </div>
  )
}
export default App