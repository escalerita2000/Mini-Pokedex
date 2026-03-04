import {useState} from 'react'

const Buscador = ({ onBuscar }) => {
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()                       
    if (input.trim()) {
      onBuscar(input.trim().toLowerCase())
      setInput('')
    }
  }

  return (
    <div className='search-container'>
      <form onSubmit={handleSubmit}>        
        <input
          className='search-input'
          type="search"
          placeholder="Buscar Pokémon..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className='search-button' type='submit'>Buscar</button>
      </form>
    </div>
  )
}
export default Buscador