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
  
      setPokemons(data.results)
    }

    fetchPokemons()
  }, [])

  return (
    <main className="w-1/2 m-auto border border-red-700 p-6">
      <h1 className="text-3xl font-bold underline text-center">Poké Catalog</h1>
      
      <section className="mt-6">
        {/* TODO: Renderizar cada nombre de los pokemons que se encuentrn en el estado pokemons   */}
        {pokemons.map(pokemon => {
          return (
            <article
              key={pokemon.url}
              className="border rounded-lg bg-slate-100 m-2 p-2"
            >
              <h3 className="font-bold text-center uppercase">{pokemon.name}</h3>

              {/* TODO: mostrar la imagen del pokemon correspondiente que se encuentra en su objeto de detalle en la clave "sprites.other.official-artwork.front_default" */}

              <img src="" className="w-40" />
            </article>
          )
        })}
      </section>
      
      <pre>{JSON.stringify(pokemons, null, 2)}</pre>


      {/* <button onClick={() => setCounter(counter + 1)}>{counter}</button> */}
    </main>
  )
}

export default App
