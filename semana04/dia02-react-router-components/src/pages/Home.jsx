import { useEffect, useState } from "react"
import { fetchCharacters } from "../services/characters"

const CharacterList = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetchCharacters()
      .then(results => setCharacters(results))
  }, [])

  return (
    <>
      <div className="list-group">
        {characters.map(character => {
          return (
            <a
              key={character.id}
              href="#"
              className="list-group-item list-group-item-action"
            >
              {character.name}
            </a>
          )
        })}
        
      </div>

      {JSON.stringify(characters)}
    </>
  )
}

const Home = () => {
  return (
    <>
      <h3>CharacterList</h3>

      <CharacterList />
    </>
  )
}

export default Home