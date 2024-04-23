export const fetchPokemons = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon')

  return await response.json()
}