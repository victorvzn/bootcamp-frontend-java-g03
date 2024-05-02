const PokemonDetailPage = ({ params }) => {
  const { name } = params

  return (
    <div>PokemonDetailPage {name}</div>
  )
}

export default PokemonDetailPage