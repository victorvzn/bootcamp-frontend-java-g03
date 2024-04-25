import { useEffect, useState } from "react"
import { fetchCharacters } from "../services/characters"
import { Link } from 'react-router-dom'

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
            <Link
              key={character.id}
              to={`/character/${character.id}`}
              className="list-group-item list-group-item-action"
            >
              {character.name}
            </Link>
          )
        })}
        
      </div>

      {/* {JSON.stringify(characters)} */}
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