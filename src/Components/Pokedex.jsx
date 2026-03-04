import {useState, useEffect} from 'react'

const Pokedex = ({ nombre }) => {     
  const [pokemon, setPokemon] = useState(null)
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

    useEffect(() => {
    setCargando(true)                  // ← resetea estados antes de buscar
    setError(null)
    setPokemon(null)

    fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
      .then(respuesta => {
        if (!respuesta.ok) throw new Error(`"${nombre}" no está en la Pokédex`)
        return respuesta.json()
      })
      .then(datos => {
        setPokemon(datos)
        setCargando(false)
      })
      .catch(error => {
        setError(error.message)
        setCargando(false)
      })
  }, [nombre])          

    if (cargando) {
        return <h2>Buscando datos en la hierba alta...</h2>
    }

    if (error) {
        return <h2 style={{color: 'red'}}>Error: {error}</h2>
    }

const cardStyle = {
  border: '4px solid #cc0000',
  borderRadius: '14px',
  width: '260px',
  textAlign: 'center',
  backgroundColor: '#f5f0e8',
  boxShadow: '6px 6px 0px #880000, 0 0 30px rgba(204,0,0,0.3)',
  overflow: 'hidden',
  animation: 'fadeIn 0.4s ease',
}

const headerStyle = {
  backgroundColor: '#cc0000',
  padding: '14px 20px',
  borderBottom: '3px solid #880000',
}

const h2Style = {
  margin: 0,
  fontSize: '13px',
  color: 'white',
  textShadow: '2px 2px 0 #880000',
  fontFamily: "'Press Start 2P', monospace",
  letterSpacing: '1px',
}

const bodyStyle = {
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '12px',
}

const spriteWrapStyle = {
  width: '150px',
  height: '150px',
  backgroundColor: 'white',
  borderRadius: '8px',
  border: '3px solid #d0c8b8',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.08)',
}

const imgStyle = {
  width: '120px',
  height: '120px',
  imageRendering: 'pixelated',
  animation: 'float 3s ease-in-out infinite',
}

const pStyle = {
  margin: '4px 0',
  fontSize: '10px',
  color: '#444',
  fontFamily: "'Press Start 2P', monospace",
}

    return (
        
    <div style={cardStyle}>
  <div style={headerStyle}>
    <h2 style={h2Style}>¡Es {pokemon.name.toUpperCase()}!</h2>
  </div>
  <div style={bodyStyle}>
    <div style={spriteWrapStyle}>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        style={imgStyle}
      />
    </div>
    <p style={pStyle}><strong>Número:</strong> #{pokemon.id}</p>
    <p style={pStyle}><strong>Peso:</strong> {pokemon.weight / 10} kg</p>
  </div>
</div>
    )
}

export default Pokedex
