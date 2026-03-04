import {useState, useEffect} from 'react'

const Pokedex = () => {

    const [pokemon, setPokemon] = useState(null)
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const nombrePokemon = 'pikachu'
        fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`)
            .then(respuesta => {
                if (!respuesta.ok) {
                    throw new Error('El pokemon salvaje escapo! (No se encontro)')
                }
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
    }, [])

    if (cargando) {
        return <h2>Buscando datos en la hierba alta...</h2>
    }

    if (error) {
        return <h2 style={{color: 'red'}}>Error: {error}</h2>
    }

    return (
        <div style={{
            border: '3px solid #cc0000',
            borderRadius: '10px' , 
            padding: '20px' ,
            width: '250px' ,
            textAlign: 'center',
            backgroundColor: '#f2f2f2'
        }}>
            <h2>!Es {pokemon.name.toUpperCase()}!</h2>
            <img 
            src={pokemon.sprites.front_default} 
            alt={pokemon.name} 
            style={{width: '150px', height: '150px'}}
            />
            <p><strong>Numero de Pokedex:</strong> # {pokemon.id}</p>
            <p><strong>Peso:</strong> {pokemon.weight/10} kg</p>
        </div>
    )
}

export default Pokedex
