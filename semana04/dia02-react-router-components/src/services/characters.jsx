export const fetchCharacters = async () => {
  const url = 'https://rickandmortyapi.com/api/character'

  const response = await fetch(url)

  const data = await response.json()

  return data.results // Devuelvo el arreglo con los personajes
}

export const getCharacterById = async (id) => {
  const url = `https://rickandmortyapi.com/api/character/${id}`

  const response = await fetch(url)

  return await response.json()
}