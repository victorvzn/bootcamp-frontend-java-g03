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

      {/* TODO: Terminar la paginación usando las rutas de react-router-dom */}

      <ul class="pagination mt-3 justify-content-center">
        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item"><a class="page-link" href="#">Next</a></li>
      </ul>

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