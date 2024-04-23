import { useState, useEffect } from "react"

function App() {
  // const [counter, setCounter] = useState(0)
  const [pokemons, setPokemons] = useState([])

  // useEffect(fx, [dependencias]) <- se ejecuta cuando hay cambios en las dependencias(estados)
  // useEffect(fx, []) <- se ejecuta la primera vez que el componente se renderiza. Esto sirve para hacer llamados a APIs.

  useEffect(() => {
    console.log('useEffect: se ejecuta solo la primera vez')

    const fetchPokemons = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon')
  
      const data = await response.json()
  
      setPokemons(data)
    }

    fetchPokemons()
  }, [])

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Poké Catalog
      </h1>
      
      <section>
        {/* TODO: Renderizar cada nombre de los pokemons que se encuentrn en el estado pokemons   */}
      </section>
      
      <pre>{JSON.stringify(pokemons, null, 2)}</pre>


      {/* <button onClick={() => setCounter(counter + 1)}>{counter}</button> */}
    </>
  )
}

export default App
