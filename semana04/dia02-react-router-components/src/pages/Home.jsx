import { useEffect, useState } from "react"
import { fetchCharacters } from "../services/characters"

const CharacterList = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetchCharacters()
      .then(results => setCharacters(results))
  }, [])

  return (
    <h1>Characters</h1>
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